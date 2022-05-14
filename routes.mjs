import { resolve } from 'path';

import db from './models/index.mjs';

import initBookController from './controllers/BookController.mjs';

export default function routes(app) {
  const bookController = initBookController(db);

  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
  app.get('/books', bookController.FindAllBooks);
  app.get('/book/:id', bookController.findBookById);
}
