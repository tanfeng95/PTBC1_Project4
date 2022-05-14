import React, { useEffect, useState } from 'react';
import '../styles.scss';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './NavBar.jsx';

export default function Cart() {
  const [checkState, setCheckState] = useState([]);
  const [itemlist, setItemList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const values = [];
    const keys = Object.keys(localStorage);
    // console.log(keys);
    for (let i = 0; i < keys.length; i++) {
      console.log(JSON.parse(localStorage.getItem(keys[i])));
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    // console.log(values);
    setItemList(values);
    setCheckState(new Array(values.length).fill(false));
  }, []);

  const handleOnChange = (position) => {
    const updateCheckState = checkState.map((item, index) => {
      // console.log(`index =${index}`);
      // console.log(`position =${position}`);
      if (index === position)
      {
        return !item;
      }
      return item;
      // index === position ? !item : item;
    });

    setCheckState(updateCheckState);

    const totalPrice = updateCheckState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return Number(sum) + Number(itemlist[index].price);
        }
        return Number(sum);
      },
      0,
    );
    setTotal(totalPrice);
  };

  const handleMakePayment = () => {

  };

  // show items in cart and total value
  const cartList = itemlist.map((items, index) => (
    <div className="d-flex justify-content-center">
      <input type="checkbox" className="checkbox" id={items.id} checked={checkState[index]} onChange={() => handleOnChange(index)} />
      <figure><img src={items.image} alt="Album" /></figure>
      <h3>
        title
        {' '}
        {items.title}
      </h3>
      <p>
        {' '}
        price
        {items.price}
      </p>
      {/* <p>
        quanity
        {' '}
        {items.quanity}
      </p> */}
      <select className="select select-bordered">
        <option disabled selected>1</option>
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

      {cartList}
      <div>
        <h2>order Summary</h2>
        <div>
          total amount =
          {total}
        </div>
      </div>
      <div>
        <Link to="/checkout">
          <button className="btn btn-primary" type="button" onClick={handleMakePayment}>checkout</button>
        </Link>

      </div>
    </div>
  );
}
