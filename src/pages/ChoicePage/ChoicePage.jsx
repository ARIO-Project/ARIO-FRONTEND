import React from 'react';
import { homeWorksPics } from '../../data';
import TrendingPics from '../../assets/t-images1.png';
import TrendingPics2 from '../../assets/t-images2.png';
import TrendingPics3 from '../../assets/t-images3.png';
import TrendingPics4 from '../../assets/t-images4.png';
import TrendingPics5 from '../../assets/t-images5.png';
import NavBar from '../../components/HomePageComponents/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './ChoicePage.css';

const ChoicePage = () => {
  return (
    <div className="choice-container">
      <NavBar />
      <div className="choice-header">
        <h1 className="choice-title">Make your Choice</h1>
        <p className="choice-subtitle">Select from our curated collection of traditional Nigerian clothing</p>
      </div>
      
      <div className="choice-grid">
        {homeWorksPics.map((item, index) => (
          <div className="choice-item" key={index}>
            <img src={item.image} alt={`clothing-${index}`} className="choice-image" />
          </div>
        ))}
      </div>

      <div className="trending-section">
        <h2 className="trending-title">Trending Styles</h2>
        <div className="trending-grid">
          <div className="trending-featured">
            <img src={TrendingPics} alt="featured-trending" className="trending-featured-image2" />
          </div>
          <div className="trending-small-grid">
            <img src={TrendingPics2} alt="trending-2" className="trending-small-image" />
            <img src={TrendingPics3} alt="trending-3" className="trending-small-image" />
            <img src={TrendingPics4} alt="trending-4" className="trending-small-image" />
            <img src={TrendingPics5} alt="trending-5" className="trending-small-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoicePage;