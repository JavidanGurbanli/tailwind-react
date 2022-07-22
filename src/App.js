import React, { useState } from 'react'
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Destinations from './components/Destinations/Destinations';
import Search from './components/Search/Search';
import Selects from './components/Selects/Selects';
import ImgCarousel from './components/ImgCarousel/ImgCarousel';
import Footer from './components/Footer/Footer';

const App = () => {
  return(
    <div>
    <Navbar/>
    <Hero/>
    <Destinations/>
    <Search/>
    <Selects/>
    <ImgCarousel/>
    <Footer/>
    </div>

  )
};
export default App;