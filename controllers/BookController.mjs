import pkg from 'sequelize';

const { Op } = pkg;

export default function initBookController(db) {
  const FindAllBooks = async (request, response) => {
    try {
      // console.log(request.query.search);
      let books;
      if (request.query.search) {
        // console.log('inside search');
        books = await db.Book.findAll({
          where: {
            title: {
              [Op.like]: `%${request.query.search}%`,
            },
          },
        });
      } else {
        books = await db.Book.findAll();
      }
      // console.log(books);
      response.send(books);
    } catch (error) {
      console.log(error);
    }
  };

  const findBookById = async (request, reponse) => {
    const books = await db.Book.findByPk(request.params.id);
    reponse.send(books);
  };
  return {
    FindAllBooks,
    findBookById,
  };
}
