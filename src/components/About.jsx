import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faStar, faUtensils, faUserTie, faHeart, faBowlFood } from '@fortawesome/free-solid-svg-icons'
import food from '../assets/food.jpg'

export default function About() {

  return (


    <div className='about-us'>

      <div className='body'>
        <div className='about-page'>
          <h2>About Us</h2>
          <h4>Serving Happiness,One plate at a time</h4>

          <p>Welcome to FlavorHub, where great food meets a warm and welcoming atmosphere. We believe that food is more than just a meal — it is an experience meant to be shared and remembered. </p>

          <p>At FlavorHub, we bring together fresh ingredients, delicious flavors, and creative recipes to serve food that makes every visit special. From comforting classics to exciting new dishes, our menu has something for everyone.</p>

          <div className="missions">
            <div className="mission">

              <FontAwesomeIcon icon={faLeaf} size='2x' style={{ color: "blueviolet" }} className='icon' />

              <h2>Our Mission</h2>

              <p>
                Our mission is simple — to serve delicious food with quality,
                passion, and care.
              </p>
            </div>

            <div className="vision">

              <FontAwesomeIcon icon={faStar} size='2x' style={{ color: "blueviolet" }} className='icon' />

              <h2>Our Vision</h2>

              <p>
                To be a place where good food creates happier people
              </p>
            </div>
          </div>


        </div>

        <div className="img">
          <img src={food} alt="src" style={{ height: "600px", width: "480px" }} />
        </div>
      </div>

      <div className="why">
        <h2> Why Choose FlavorHub?</h2>

        <div className="features">

          <div className="feature">
            <label htmlFor="">
              <FontAwesomeIcon icon={faUtensils} />
              Fresh Ingredients
            </label>
            <p>Quality ingredients in every dish.</p>
          </div>

          <div className="feature">
            <label htmlFor="">
              <FontAwesomeIcon icon={faUserTie} />
              Expert Chefs
            </label>
            <p>Passionate chefs creating delicious recipes.</p>
          </div>

          <div className="feature">
            <label htmlFor="">
              <FontAwesomeIcon icon={faHeart} />
              Made with Love
            </label>
            <p>Every meal is prepared with care.</p>
          </div>

          <div className="feature">
            <label>
              <FontAwesomeIcon icon={faStar} />
            Great Experience
            </label>
            {/* Great Experience */}
            <p>A comfortable place to enjoy with family and friends.</p>
          </div>

          <div className="feature">
          
          <label htmlFor="">
            <FontAwesomeIcon icon={faBowlFood} />
              Something for Everyone
          </label>
            <p>A variety of dishes to suit different tastes.</p>
          </div>

        </div>
      </div>

      <div className='story'>

        <h2 style={{textAlign: "center"}}> Our Story </h2>

        <p>FlavorHub started with a simple idea: bring people together through great food. What began as a passion for delicious cooking has grown into a place where friends and families can relax, connect, and enjoy memorable meals.</p>
        
      </div>

         <div className="exp">
          <h2>Come , Experience and Explore FlavorHub</h2>

        <p>
          Whether you're joining us for a quick lunch, a family dinner, or a
          special celebration, we're happy to have you.
        </p>

        <h3>Good food. Great people. Unforgettable moments.</h3>

        <p>That's the FlavorHub experience.</p>
         </div>
    </div>
  )
}
