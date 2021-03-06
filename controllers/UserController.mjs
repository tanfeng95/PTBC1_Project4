import { response } from 'express';
import jsSHA from 'jssha';

const { SALT } = process.env.SALT;
/**
 * create a hash from input varible
 * @param {string} input
 * @returns
 */
const getHash = (input) => {
  // create new SHA object
  const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
  // create an unhashed cookie string based on user ID and salt
  const unhashedString = `${input}-${SALT}`;
  // generate a hashed cookie string using SHA object
  shaObj.update(unhashedString);
  return shaObj.getHash('HEX');
};

/**
 * login controller which deal with all login based function
 * @param {} db
 * @returns
 */
export default function initUserController(db) {
  /**
   * user login , find the user by name and match password before, return user result to client
   * @param {*} request
   * @param {*} reponse
   * @returns
   */
  const login = async (request, reponse) => {
    const user = await db.User.findAll({
      where: {
        username: request.body.name,
      },
    });
    if (typeof user[0] === 'undefined') {
      reponse.status(200).send({ noUser: true, error: 'Please Login Using Correct UserName and Password' });
      return;
    }
    const { dataValues } = user[0];
    const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
    shaObj.update(request.body.password);
    const hashedPassword = shaObj.getHash('HEX');

    if (dataValues.password === hashedPassword) {
      reponse.send(user);
    } else {
      reponse.send(400);
    }
  };
  /**
   * user sign up function add a new user into data base
   * @param {} request
   * @param {*} reponse
   * @returns
   */
  const signup = async (request, reponse) => {
    console.log(request.body);

    const FindUser = await db.User.findAll({
      where: {
        username: request.body.name,
      },
    });
    if (FindUser.length !== 0) {
      console.log('there a user');
      reponse.status(200).send({ noUser: true, error: 'Please Choose another username' });
      return;
    }

    const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
    shaObj.update(request.body.password);
    const hashedPassword = shaObj.getHash('HEX');
    const user = {
      username: request.body.name,
      password: hashedPassword,
    };
    const createUser = await db.User.create(user);
    reponse.send(createUser);
  };
  // const getUserById = async (request, reponse) => {
  //   console.log(request.body);
  // };
  return {
    // getUserById,
    login,
    signup,
  };
}
