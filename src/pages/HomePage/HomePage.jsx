import React from 'react'
import HeroSection from "../../components/HomePageComponents/HeroSection/HeroSection";
import Section1 from "../../components/HomePageComponents/Body/Body";
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page-container" >
      <HeroSection />
      <Section1 />
    </div>
  )
}

export default HomePage