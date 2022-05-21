import React, { useEffect, useState } from 'react';
import '../styles.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './NavBar.jsx';

export default function Books({ bookList, setbookList }) {
  useEffect(() => {
    axios.get('/books')
      .then((result) => {
        const { data } = result;
        const newArray = [];
        for (let i = 0; i < data.length; i++) {
          newArray.push(data[i]);
        }
        setbookList(newArray);
      });
  }, []);

  const newBooks = bookList.map((x) => (
    <div className="card shadow-x card-div" style={{ width: `${13}rem` }}>
      <Link to={`/book/${x.id}`}>
        <figure><img className="img-fluid image-size" src={x.image} alt="books" /></figure>
      </Link>
      <div className="card-body">
        <p>
          {' '}
          {x.title}
        </p>
        <p className="book-price">
          $
          {' '}
          {x.price}
        </p>
      </div>
      {/* <div className="card-actions justify-end">
        <Link to={`/book/${x.id}`} style={{ display: 'block', margin: '1rem 0' }} key={x.id}>book</Link>
      </div> */}
    </div>
  ));

  return (
    <div>
      <Navbar />
      <div className="row over d-flex justify-content-around">
        {bookList.length > 0 && (
        <>
          {newBooks}
        </>
        ) }
      </div>
    </div>

  );
}
