import React, { useEffect, useState } from 'react';
import '../styles.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Navbar from './NavBar.jsx';

export default function UserOrder() {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    axios.get('/order/1')
      .then((result) => {
        const { data } = result;
        console.log(data);
        const { userOrder } = data;
        console.log(userOrder);
        setOrderList([...userOrder]);
      }).catch((err) => {
        console.log(err);
      });
  }, []);
  const newOrder = orderList.map((x) => {
    console.log(x);
    const date = new Date();
    return (
      <div className="d-flex justify-content-center">
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
          {x.books.map((element) => {
            console.log(element);
            return (
              <div>
                <p>{element.title}</p>
                <p>{element.price}</p>
                <p>{element.book_orders.quantity}</p>

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
      {orderList.length > 0 && (
        <>
          {newOrder}
        </>
      ) }
    </div>
  );
}
