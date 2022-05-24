import React, { useEffect, useState } from 'react';

import './styles.scss';
import {
  BrowserRouter, Routes,
  Route,
  Link, useNavigate,
} from 'react-router-dom';
import { useCookies } from 'react-cookie';

import Book from './components/book.jsx';
import Books from './components/Books.jsx';
import Cart from './components/cart.jsx';
import Checkout from './components/checkout.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import UserOrder from './components/UserOrder.jsx';

export default function App() {
  const [bookList, setbookList] = useState([]);
  const [checkState, setCheckState] = useState([]);
  const [quanitylist, setQuantityList] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const navigate = useNavigate();
  // console.log(cookies);
  // console.log(cookies.sessionId);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Books bookList={bookList} setbookList={setbookList} />} />
        <Route path="/book/:id" element={<Book cookies={cookies} />} />
        <Route path="/cart" element={<Cart checkState={checkState} setCheckState={setCheckState} quanitylist={quanitylist} setQuantityList={setQuantityList} cookies={cookies} />} />
        <Route path="/checkout" element={<Checkout checkState={checkState} quanitylist={quanitylist} />} />
        <Route path="/login" element={<Login setCookie={setCookie} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/orders" element={<UserOrder cookies={cookies} />} />
        <Route
          path="*"
          element={(
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
      )}
        />
      </Routes>

    </div>

  );
}
