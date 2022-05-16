import React, { useEffect, useState } from 'react';
import '../styles.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Navbar from './NavBar.jsx';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const handleLogin = () => {
    console.log(email);
    console.log(password);
    const input = { name: email, password };
    axios.post('/getUser', input)
      .then((result) => {
        console.log(result);
        const { data } = result;
        console.log(data[0].id);
        setCookie('userId', data[0].id, { path: '/' });
        setCookie('sessionId', data, { path: '/' });
        navigate('/');
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white border-t-4 border-purple-600 rounded-md shadow-md border-top lg:max-w-md">
        <h1 className="text-3xl font-semibold text-center text-purple-700">BOOK UI</h1>
        <form className="mt-6">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mt-4">
            <div>
              <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <a href="#" className="text-xs text-gray-600 hover:underline">Forget Password?</a>
            <div className="mt-6">
              <button
                type="button"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {' '}
          Don't have an account?
          {' '}
          <a href="#" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>

        </p>
      </div>
    </div>
  );
}
