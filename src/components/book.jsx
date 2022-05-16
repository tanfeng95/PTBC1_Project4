import React, { useEffect, useState } from 'react';
import '../styles.scss';
import axios from 'axios';
import { useParams, Link, Outlet } from 'react-router-dom';
import Navbar from './NavBar.jsx';
import Modal from './modal.jsx';

export default function Book() {
  const [book, setbook] = useState(null);
  const [value, setvalue] = useState(1);
  const [name, setName] = useLocalStorage(`book id${book?.id}`, 'Bob');
  const [showModal, setShowModal] = React.useState(false);
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    axios.get(`/book/${params.id}`)
      .then((result) => {
        const { data } = result;
        setbook(data);
      });
  }, []);

  const handleAddToCartBtn = () => {
    book.quanity = value;
    setName(book);
    setShowModal(true);
  };
  const handleBuyNowBtn = () => {
    book.quanity = value;
    setName(book);
  };

  return (

    <div>
      <Navbar />
      <div>
        {book && (
        <>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={`/${book.image}`} alt="Album" /></figure>
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
                <Link to="/cart">
                  <button className="btn btn-primary" type="button" onClick={handleBuyNowBtn}>buy now</button>
                </Link>
                <button className="btn btn-primary" type="button" onClick={handleAddToCartBtn}>add to cart</button>

              </div>
            </div>
          </div>
        </>
        ) }
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Item Added To Cart
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* body */}

                {/* footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}

    </div>
  );

  function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      if (typeof window === 'undefined') {
        return initialValue;
      }
      try {
      // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
      // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
      try {
      // Allow value to be a function so we have same API as useState
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
      // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
    return [storedValue, setValue];
  }
}