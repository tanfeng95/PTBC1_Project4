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
    <div className="col card w-96 bg-base-100">
      <figure><img className="img-fluid image_size" src={x.image} alt="books" /></figure>
      <div className="card-body">
        <h3 className="card-title">{x.title}</h3>
        <p>
          $
          {' '}
          {x.price}
        </p>
      </div>
      <div className="card-actions justify-end">
        <Link to={`/book/${x.id}`} style={{ display: 'block', margin: '1rem 0' }} key={x.id}>book</Link>
      </div>
    </div>
  ));

  return (
    <div>
      <Navbar />
      <div className="row over d-flex justify-content-center">
        {bookList.length > 0 && (
        <>
          {newBooks}
        </>
        ) }
      </div>
    </div>

  );
}
