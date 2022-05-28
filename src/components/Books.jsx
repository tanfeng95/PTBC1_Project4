import React, { useEffect, useState } from 'react';
import '../styles.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './NavBar.jsx';

export default function Books({ bookList, setbookList }) {
  const [search, setSearch] = useState('');
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
    <div className="card w-96 bg-base-100 shadow-xl card-div" key={x.id} style={{ width: `${13}rem` }}>
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

  const handleSearch = (event) => {
    console.log(search);
    axios.get('/books', {
      params: {
        search,
      },
    })
      .then((result) => {
        const { data } = result;
        const newArray = [];
        for (let i = 0; i < data.length; i++) {
          newArray.push(data[i]);
        }
        setbookList(newArray);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="search-div flex justify-center">
        <input type="text" placeholder="Search…" className="input input-bordered search" onChange={(event) => setSearch(event.target.value)} />
        <button className="btn btn-square" type="button" onClick={handleSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
      <div className="flex flex-wrap book-list ">
        {bookList.length > 0 && (
        <>
          {newBooks}
        </>
        ) }
      </div>
    </div>

  );
}
