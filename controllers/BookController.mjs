export default function initBookController(db) {
  const FindAllBooks = async (request, response) => {
    try {
      const books = await db.Book.findAll();
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
