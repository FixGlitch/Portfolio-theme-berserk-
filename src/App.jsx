import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Loader from "./Components/Loader/Loader";
import { setLoading } from './Redux/loadingSlice';
import Aboutme from './Components/Aboutme/Aboutme';
import Skills from './Components/Skills/Skills';
import Proyects from './Components/Proyects/Proyects';
import Contact from './Components/Contact/Contact';

function App() {
  const { pathname } = useLocation();
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <NavBar />
          <Home/>
          <Aboutme/>
          <Skills/>
          <Proyects/>
          <Contact/>
        </>
      )}
    </>
  );
}

export default App;

