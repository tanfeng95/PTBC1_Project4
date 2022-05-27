import { response } from 'express';
import jsSHA from 'jssha';

const { SALT } = process.env.SALT;
const getHash = (input) => {
  // create new SHA object
  const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
  // create an unhashed cookie string based on user ID and salt
  const unhashedString = `${input}-${SALT}`;
  // generate a hashed cookie string using SHA object
  shaObj.update(unhashedString);
  return shaObj.getHash('HEX');
};

export default function initUserController(db) {
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
      response.send(400);
    }
  };
  const signup = async (request, response) => {
    console.log(request.body);

    const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
    shaObj.update(request.body.password);
    const hashedPassword = shaObj.getHash('HEX');
    const user = {
      username: request.body.name,
      password: hashedPassword,
    };
    const createUser = await db.User.create(user);
    response.send(createUser);
  };
  const getUserById = async (request, response) => {
    console.log(request.body);
  };
  return {
    getUserById,
    login,
    signup,
  };
}
