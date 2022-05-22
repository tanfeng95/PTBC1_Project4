export default function initOrderController(db) {
  const addOrder = async (request, response) => {
    try {
      console.log(request.body.userId);
      const newOrder = await db.Order.create({
        user_id: Number(request.body.userId),
        purchase_date: new Date(),
      });

      await request.body.newOrder.forEach((book) => {
        console.log(book.id);
        db.BookOrder.create({
          book_id: book.id,
          order_id: newOrder.id,
          quantity: book.quanity,
          price: book.price,
        });
      });
      response.send(200);
    } catch (error) {
      console.log(error);
    }
  };
  const getOrderByUserId = async (request, response) => {
    console.log(request.params.id);
    const userOrder = await db.Order.findAll({
      where: {
        user_id: request.params.id,
      },
      include: {
        model: db.Book,
      },
    });
    response.send({ userOrder });
  };
  return {
    addOrder,
    getOrderByUserId,
  };
}
