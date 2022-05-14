import React, { useEffect, useState } from 'react';
import '../styles.scss';
import axios from 'axios';
import { useParams, Link, Outlet } from 'react-router-dom';
import Navbar from './NavBar.jsx';

export default function Book() {
  const [book, setbook] = useState([]);
  const [value, setvalue] = useState(1);

  const params = useParams();
  console.log(params.id);
  try {
    useEffect(() => {
      axios.get(`/book/${params.id}`)
        .then((result) => {
          const { data } = result;
          console.log(data);
          setbook(data);
        });
    }, []);
  } catch (ex) {
    console.log(ex);
  }
  const singleBook = book.map((book) => (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p>
          <h3>book details :</h3>
          {' '}
          {book.book_detail}
        </p>
        <p>
          {'price : '}
          $
          {' '}
          {book.price}
        </p>
        <p>
          {' language: '}

          {' '}
          {book.language}
        </p>

        <select className="select select-bordered" onChange={(event) => { setvalue(event.target.value); }}>
          <option disabled selected>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" type="submit">buy now</button>
          <button className="btn btn-primary" type="submit">add to cart</button>
        </div>
      </div>
    </div>

  ));

  return (

    <div>
      <Navbar />
      <div>
        {book.length > 0 && (
        <>
          {singleBook}
        </>
        ) }
      </div>

    </div>
  );
}
