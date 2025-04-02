import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import NavBar from '../../components/HomePageComponents/NavBar/NavBar';
import PropTypes from 'prop-types';
import './CustomPricing.css';

const CustomPricing = ({ onClose }) => {
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle price submission logic here
    console.log('Price submitted:', price);
    onClose();
  };

  return (
    <div className="custom-pricing-overlay">
      <NavBar />
      <div className="custom-pricing-modal">
        <div className="custom-pricing-header">
          <Icon 
            icon="material-symbols:arrow-back-rounded" 
            className="custom-pricing-back" 
            onClick={onClose}
          />
          <h2 className="custom-pricing-title">CUSTOM CLOTH PRICING</h2>
          <Icon 
            icon="material-symbols:close-rounded" 
            className="custom-pricing-close" 
            onClick={onClose}
          />
        </div>

        <p className="custom-pricing-subtitle">
          Enter the price you are charging for this custom design selected by users
        </p>

        <form onSubmit={handleSubmit} className="custom-pricing-form">
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="e.g 45,000"
            className="custom-pricing-input"
          />
          <button type="submit" className="custom-pricing-submit">
            <NavLink style={{ textDecoration: 'none', color: 'white', underline: 'none' }} to="/choice">Send</NavLink>
          </button>
        </form>
      </div>
    </div>
  );
};

CustomPricing.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CustomPricing;
