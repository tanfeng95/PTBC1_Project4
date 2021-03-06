import React, { useEffect, useState } from 'react';
import '../styles.scss';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from './NavBar.jsx';

export default function Checkout({ checkState, quanitylist }) {
  // console.log(checkState);
  // console.log(quanitylist);
  const [checkoutList, setCheckoutList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [sum, setSum] = useState(0);

  /**
   * get item from local storage and item selected go into item list
   */
  useEffect(() => {
    const values = [];
    const keys = Object.keys(localStorage);
    // console.log(keys);
    for (let i = 0; i < keys.length; i++) {
      if (checkState[i] === true) {
        const item = JSON.parse(localStorage.getItem(keys[i]));
        item.quanity = quanitylist[i];
        values.push(item);
      }
    }
    setCheckoutList(values);
  }, []);

  /**
   *for each item in check out list
   */
  // let sum = 0;
  const itemList = checkoutList.map((items, index) => {
    const newTotal = totalPrice + (Number(items.price) * Number(items.quanity));
    console.log(newTotal);
    // sum += newTotal;
    setSum(sum + newTotal);
    return (
      <div className="flex justify-center items-center cart-item">
        <figure><img className="image-cart" src={items.image} alt="Album" /></figure>
        <h6 className="cart-item-title">
          {items.title}
        </h6>
        <p>
          {' '}
          $
          {items.price}
        </p>
        <p className="m-5">
          Amount
          <p className="flex justify-center">
            {items.quanity}
          </p>

        </p>
      </div>
    );
  });
  /**
 * handle place order add into order data base
 */
  const handlePlaceOrder = () => {
    setShowModal(true);
    console.log(Cookies.get('userId'));
    const input = { newOrder: checkoutList, userId: Cookies.get('userId') };
    axios.post('/createOrder', input)
      .then((result) => {
        console.log(result);
        const { data } = result;
        console.log(data);
        if (data === 'OK') {
          // remove the data from local storage
          checkoutList.forEach((item, index) => {
            console.log(item);
            localStorage.removeItem(`book id${item.id}`);
          });
        }
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="checkout-div">
        <h4>Item Selected</h4>
        {itemList}
      </div>
      <div className="flex items-end flex-col
      cart-order-summary-div"
      >
        <h6>
          Order Summary
        </h6>
        <div>
          $
          {' '}
          {sum}
        </div>
        <button className="btn btn-primary" type="button" onClick={handlePlaceOrder}>place Order Now</button>
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
                    Item Order has been Placed
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ??
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
}
