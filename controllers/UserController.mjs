import { response } from 'express';

export default function initUserController(db) {
  const findUserById = async (request, reponse) => {
    console.log('hello');
    console.log(request.body.name);
    console.log(request.body.password);
    const user = await db.User.findAll({
      where: {
        username: request.body.name,
      },
    });
    console.log(user);
    const { dataValues } = user[0];
    if (dataValues.password === request.body.password) {
      reponse.send(user);
    } else {
      response.send(400);
    }
  };
  return {
    findUserById,
  };
}
