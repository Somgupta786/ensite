import React, { useState } from "react";
import HomeCarousel from "../../Components/carousel/HomeCarousel";
// import Footer from '../../Components/Footer/Footer'
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./Home.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

import Main from "../../Components/Home/Home";

function Home() {
  return (
    <>
      <div className="main-page ">
      <Header active="home" />
      <Main />
      
    </div>
    <Footer />
    </>
    
  );
}

export default Home;
