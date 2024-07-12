import Header from '../Components/Header';
import MainPage from '../Components/MainPage';
import Services from '../Components/Services';
import AboutUs from '../Components/AboutUs';
import Contacts from '../Components/Contacts';
import Footer from '../Components/Footer';
import NotFound from '../Components/NotFound';
import Feedback from '../Components/Feedback';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
const { useState, useEffect } = React

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <main className="pb-5">
          <Routes>
            <Route path='*' element={<NotFound status={404} />} />
            <Route path='/' element={<MainPage />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contacts' element={<Contacts screenWidth = {screenWidth} screenHeight = {screenHeight} />} />
            <Route path='/feedback' element={<Feedback screenHeight = {screenHeight} />} />
          </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}