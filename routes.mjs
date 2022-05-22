import { resolve } from 'path';

import db from './models/index.mjs';

import initBookController from './controllers/BookController.mjs';
import initOrderController from './controllers/OrderController.mjs';
import initUserController from './controllers/UserController.mjs';

export default function routes(app) {
  const bookController = initBookController(db);
  const orderController = initOrderController(db);
  const UserController = initUserController(db);
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
  app.get('/books', bookController.FindAllBooks);
  app.get('/book/:id', bookController.findBookById);
  app.post('/createOrder', orderController.addOrder);
  app.post('/login', UserController.login);
  app.post('/getUserById', UserController.getUserById);
  app.post('/signup', UserController.signup);
  app.get('/order/:id', orderController.getOrderByUserId);
}
