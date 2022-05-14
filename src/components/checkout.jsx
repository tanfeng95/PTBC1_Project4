import React, { useEffect, useState } from 'react';
import '../styles.scss';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './NavBar.jsx';

export default function Checkout() {
  return (
    <div>
      <div>
        items selected
      </div>
      <div>
        delivery method
      </div>
      <div>
        payment method
      </div>
      <div>
        place order
      </div>
    </div>
  );
}
