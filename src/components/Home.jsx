import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (

    <div className="homes">


      <img src="src/assets/restaurent_img.png" alt="img" style={{ height: "650px", width: "1520px" }} />

      <div className="home-content">

        <h1>Welcome to FlavorHub</h1>

        <p className='tag' style={{ fontSize: "28px" }}>
          Delicious Food <span>.</span> Great Vibes
        </p>

        <p className='taste'>Taste the <br /> <span style={{ lineHeight: 0.1 }}> Good Life </span></p>

        <p style={{ marginTop: "10px" }} className='deli'>
          Delicious food, fresh ingredients and unforgettable flavours.
        </p>

      <Link to="/services" style={{ textDecoration: "none" }} className='button'>
            <button>Explore Our Menu</button>
          </Link>

      </div>

    </div>
  );
}