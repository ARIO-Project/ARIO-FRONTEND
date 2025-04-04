import React from 'react'
import HeroSection from "../../components/HomePageComponents/HeroSection/HeroSection";
import Section1 from "../../components/HomePageComponents/Body/Body";
import NavBar from '../../components/HomePageComponents/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page-container" >
      <NavBar />
      <HeroSection />
      <Section1 />
      <Footer />
    </div>
  )
}

export default HomePage