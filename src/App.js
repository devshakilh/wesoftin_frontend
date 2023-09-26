import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Details from './components/Details';
import Errror from './components/Errror';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Register from './components/Register';
import Home from './components/Home';
import UserDetails from './components/userDetails';

import { ToastContainer } from 'react-toastify';
import Store from './Redux/Store';
import { Provider } from 'react-redux';
import UserProfile from './components/UserProfile';





function App() {


  return (

    <>
      <ToastContainer theme='colored' position='top-center'></ToastContainer>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/userprofile' element={<UserProfile />} />

        <Route path='/userDetails/:id' element={<UserDetails />} />

        <Route path='*' element={<Errror />} />
      </Routes>

    </>

  );
}

export default App;


