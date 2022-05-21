import React, { useEffect, useState } from 'react';
import '../styles.scss';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './NavBar.jsx';

export default function Cart({
  checkState, setCheckState, quanitylist, setQuantityList,
}) {
  const [itemlist, setItemList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const values = [];
    const keys = Object.keys(localStorage);
    // console.log(keys);
    for (let i = 0; i < keys.length; i++) {
      // console.log(JSON.parse(localStorage.getItem(keys[i])));
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    // console.log(values);
    setItemList(values);
    setCheckState(new Array(values.length).fill(false));
    setQuantityList(new Array(values.length).fill(1));
  }, []);

  const handleOnChange = (position) => {
    const updateCheckState = checkState.map((item, index) => {
      if (index === position)
      {
        return !item;
      }
      return item;
    });
    setCheckState(updateCheckState);
    console.log(updateCheckState);
    const totalPrice = updateCheckState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          console.log(quanitylist[index]);
          return Number(sum) + (Number(itemlist[index].price) * Number(quanitylist[index]));
        }
        return Number(sum);
      },
      0,
    );
    setTotal(totalPrice);
    const isItemChecked = updateCheckState.map(((isTrue, index) => {
      if (isTrue === true) {
        console.log(itemlist[index]);
      }
    }));
  };

  const handleSelectValue = (position, targetValue) => {
    const updateQuantityList = quanitylist.map((value, index) => {
      if (index === position) {
        return Number(targetValue);
      }
      return value;
    });
    setQuantityList(updateQuantityList);
    console.log(updateQuantityList);
  };
  const handleDeleteItem = (position) => {
    console.log('delete');
    console.log(position);
    const updateCartList = itemlist.map((item, index) => {
      if (position === index) {
        localStorage.removeItem(`book id${item.id}`);
      }
    });
    const values = [];
    const keys = Object.keys(localStorage);
    // console.log(keys);
    for (let i = 0; i < keys.length; i++) {
      // console.log(JSON.parse(localStorage.getItem(keys[i])));
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    console.log(keys);
    if (keys.length === 0) {
      setItemList([]);
    } else {
      setItemList(values);
    }
  };
  // show items in cart and total value
  const cartList = itemlist.map((items, index) => (
    <div className="d-flex justify-content-center cart-item">
      <input type="checkbox" className="checkbox" checked={checkState[index]} onChange={() => handleOnChange(index)} />
      <div className="image-cart">
        <figure><img src={items.image} alt="Album" /></figure>
      </div>

      <h6>
        {items?.title}
      </h6>
      <div>
        <p>
          {' '}
          price
          {items.price}
        </p>
        <button className="btn btn-square" type="button" onClick={() => handleDeleteItem(index)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <select className="select select-bordered" onChange={(event) => handleSelectValue(index, event.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
      </select>

    </div>
  ));
  return (
    <div>
      <Navbar />
      {cartList.length > 0 && (
      <>
        {cartList}
      </>
      ) }

      <div>
        <h2>order Summary</h2>
        <div>
          total amount =
          {total}
        </div>
      </div>
      <div>
        <Link to="/checkout">
          <button className="btn btn-primary" type="button">checkout</button>
        </Link>

      </div>
    </div>
  );
}
