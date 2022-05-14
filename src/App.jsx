import React, { useEffect, useState } from 'react';

import './styles.scss';
import {
  BrowserRouter, Routes,
  Route,
} from 'react-router-dom';
import Book from './components/book.jsx';
import Books from './components/Books.jsx';
import Cart from './components/cart.jsx';
import Checkout from './components/checkout.jsx';

export default function App() {
  const [bookList, setbookList] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books bookList={bookList} setbookList={setbookList} />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="*"
            element={(
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
      )}
          />
        </Routes>

      </BrowserRouter>
    </div>

  );
}
