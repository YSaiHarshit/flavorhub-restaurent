import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass , faPlus , faStar } from '@fortawesome/free-solid-svg-icons'
import manchuria from "../assets/manchuria.jpg"
import noodles from "../assets/Noodles.jpg"
import vegburger from "../assets/Burger.jpg"
import frenchfries from "../assets/french fries.jpg"
import paneerpizza from "../assets/paneer pizza.jpg"
import samosa from "../assets/samosa.jpg"
import paneerroll from "../assets/paneer roll.jpg"
import vadapav from "../assets/vada pav.jpg"
import chickenmanchuria from "../assets/chicken manchuria.jpg"
import paneertikka from "../assets/paneer tikka.jpg"
import springrolls from "../assets/spring rolls.jpg"
import mushroom65 from "../assets/mushroom 65.jpg"
import chillipaneer from "../assets/chilli paneer.jpg"
import paneer65 from "../assets/paneer 65.jpg"
import chickenwings from "../assets/chicken wings.jpg"

export default function Services({}) {

  const [  search , setSearch ] = useState("")

  const snacks = [

    {

      id: 1,
      name: "Veg Manchuria",
      description: "Crispy vegetable balls tossed in a flavorful Indo-Chinese Manchurian sauce.",
      price: 180,
      rating: 5,
      time: "15-20 min",
      image: manchuria

    },

    {

      id: 2,
      name: "Noodles",
      description: "Delicious stir-fried noodles loaded with fresh vegetables and aromatic spices.",
      price: 120,
      rating: 4.3,
      time: "15-20 min",
      image: noodles
    },

    {

      id: 3,
      name: "Veg Burger",
      description: "Crispy veggie patty with cheese and fresh vegetables.",
      price: 70,
      rating: 4.2,
      time: "15-20 min",
      image: vegburger
    },

    {

      id: 4,
      name: "French Fries",
      description: "Crispy golden fries with delicious seasoning.",
      price: 150,
      rating: 5,
      time: "20-25 min",
      image: frenchfries

    },

    {

      id: 5,
      name: "Paneer Pizza",
      description: "Paneer,cheesy pizza loaded with fresh vegetables.",
      price: 150,
      rating: 5,
      time: "10-20 min",
      image: paneerpizza

    },

    {

      id: 6,
      name: "Samosa",
      description: "Crispy samosa filled with spicy potato masala.",
      price: 80,
      rating: 4,
      time: "10-25 min",
      image: samosa
    },

    {

      id: 7,
      name: "Paneer Roll",
      description: "Soft flatbread filled with spicy grilled paneer, fresh vegetables, and flavorful sauces.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: paneerroll

    },

     {

      id: 8,
      name: "Vada Pav",
      description: "Spicy potato fritter served inside a soft pav with chutneys.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: vadapav
    },

     {

      id: 9,
      name: "Chicken Manchuria",
      description: "Juicy chicken pieces coated in a delicious Indo-Chinese sauce.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: chickenmanchuria

    },


     {

      id: 10,
      name: "Paneer Tikka",
      description: "Grilled paneer cubes marinated in yogurt, spices, and herbs.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: paneertikka

    },


     {

      id: 11,
      name: "Spring Rolls",
      description: "Crispy rolls filled with seasoned vegetables and noodles.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: springrolls

    },


     {

      id: 12,
      name: "Mushroom 65",
      description: "Crispy mushrooms marinated with herbs and South Indian spices.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: mushroom65

    },


     {

      id: 13,
      name: "Chilli Paneer",
      description: "Soft paneer tossed with onions, peppers, and spicy chilli sauce.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: chillipaneer

    },

     {

      id: 14,
      name: "Paneer 65",
      description: "Crispy paneer cubes seasoned with aromatic spices and herbs.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: paneer65

    },

     {

      id: 15,
      name: "Chicken Wings",
      description: "Juicy chicken wings coated with flavorful spices and a crispy crust",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: chickenwings

    },


  ]

  const filteredsnacks = snacks.filter((snack) =>
   snack.name.toLowerCase().includes(search.toLowerCase())
  )


  return (

    <div className='services-page'>

      <div className="body">
        <div className="service">
          <h2> Our Menu & Services </h2>
          <p>More Than Just a Meal</p>

          <div className="sen">
            <p>At FlavorHub, we serve delicious food made with fresh ingredients and provide convenient services to make every dining experience special. From quick snacks to satisfying meals, there’s something for everyone.</p>
          </div>

        </div>

        <div className="right-img">
          <a href="">
            <img src="src/assets/snacks.jpg" alt="" style={{ height: "260px", width: "405px", borderRadius: "15px" }} />
          </a>
        </div>

      </div>

      <div className="search-container">

        <input type="text" placeholder='Search for an item...' value={search} 
         onChange={(e) => setSearch(e.target.value)}
         />

        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />

      </div>

      <div className="snacks">

        {filteredsnacks.map((snack) => (

          <div className='snack-card' key={snack.id}>

            <img src={snack.image} alt={snack.name} style={{ height: "180px", width: "280px", borderRadius: "18px" }} 
            className='snack-image'
            />

            <div className="snack-details">

              <h2> {snack.name} </h2>

              <div className="rating">
               <label htmlFor="" style={{}}>
                 <FontAwesomeIcon icon={faStar} style={{color: 'blue' }} />
                {snack.rating}
               </label>
              </div>

              <p className='desc'> {snack.description} </p>

              <div className="food-info">
                <span className="price">
                  ₹{snack.price}
                </span>
                <br />
                <span className="time"  style={{marginTop: "15px"}}>
                  {snack.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
