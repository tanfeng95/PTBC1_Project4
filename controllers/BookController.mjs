export default function initBookController(db) {
  const FindAllBooks = async (request, response) => {
    try {
      const books = await db.Book.findAll();
      console.log(books);
      response.send(books);
    } catch (error) {
      console.log(error);
    }
  };

  const findBookById = async (request, reponse) => {
    console.log('hello');
    console.log(request.params.id);
    const books = await db.Book.findAll({
      where: {
        id: request.params.id,
      },
    });
    reponse.send(books);
  };
  return {
    FindAllBooks,
    findBookById,
  };
}
