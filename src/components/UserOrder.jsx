import React, { useEffect, useState } from 'react';
import '../styles.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import Navbar from './NavBar.jsx';

export default function UserOrder() {
  const [orderList, setOrderList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let userId;
    if (Cookies.get('userId') !== undefined) {
      userId = Cookies.get('userId');
    } else if (Cookies.get('sessionId') === undefined) {
      navigate('/login');
      return;
    }
    axios.get(`/order/${userId}`)
      .then((result) => {
        const { data } = result;
        console.log(data);
        const { userOrder } = data;
        // console.log(userOrder);
        setOrderList([...userOrder]);
      }).catch((err) => {
        console.log(err);
      });
  }, []);
  const newOrder = orderList.map((x) => {
    // console.log(x);
    const date = new Date();
    return (
      <div className="order-div">
        <div>
          <p>
            order id =
            {' '}
            {x.id}
          </p>
          <p>
            purchase date =
            {' '}
            {new Date(x.purchase_date).toLocaleDateString()}
          </p>
          {x.books.map((element, index) => {
            console.log(element);
            return (
              <div className="d-flex align-items-center ">
                <p className="order-item">
                  Item
                  {' '}
                  {index + 1}
                </p>
                <div className="image-cart">
                  <figure><img src={element.image} alt="Album" /></figure>
                </div>
                <p className="cart-item-title">{element.title}</p>
                <p className="order-item">
                  $
                  {element.price}
                </p>
                <div className="d-flex flex-column quanity-style">
                  <p>
                    Quanity
                  </p>
                  <p>
                    {element.book_orders.quantity}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    );
  });
  return (
    <div>
      <Navbar />
      <h4 className="order-div">My Orders</h4>
      {orderList.length > 0 && (
        <>
          {newOrder}
        </>
      ) }
    </div>
  );
}
