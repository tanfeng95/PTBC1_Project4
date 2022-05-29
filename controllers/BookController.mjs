import pkg from 'sequelize';

const { Op } = pkg;
/**
 *  Book Controller
 * @param {*} db
 * @returns all function inside the controller
 */
export default function initBookController(db) {
  /**
   * FindAllBooks function find all books inside data base return all books
   * @param {*} request
   * @param {*} response
   */
  const FindAllBooks = async (request, response) => {
    try {
      let books;
      if (request.query.search) {
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
      response.send(books);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * find book by ID function and return the book found
   * @param {} request
   * @param {*} reponse
   */
  const findBookById = async (request, reponse) => {
    const books = await db.Book.findByPk(request.params.id);
    reponse.send(books);
  };
  return {
    FindAllBooks,
    findBookById,
  };
}
