import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass , faPlus , faStar } from '@fortawesome/free-solid-svg-icons'

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
      image: "src/assets/manchuria.jpg"

    },

    {

      id: 2,
      name: "Noodles",
      description: "Delicious stir-fried noodles loaded with fresh vegetables and aromatic spices.",
      price: 120,
      rating: 4.3,
      time: "15-20 min",
      image: "/src/assets/Noodles.jpg"
    },

    {

      id: 3,
      name: "Veg Burger",
      description: "Crispy veggie patty with cheese and fresh vegetables.",
      price: 70,
      rating: 4.2,
      time: "15-20 min",
      image: "src/assets/Burger.jpg"
    },

    {

      id: 4,
      name: "French Fries",
      description: "Crispy golden fries with delicious seasoning.",
      price: 150,
      rating: 5,
      time: "20-25 min",
      image: "src/assets/french fries.jpg"

    },

    {

      id: 5,
      name: "Paneer Pizza",
      description: "Paneer,cheesy pizza loaded with fresh vegetables.",
      price: 150,
      rating: 5,
      time: "10-20 min",
      image: "src/assets/paneer pizza.jpg"

    },

    {

      id: 6,
      name: "Samosa",
      description: "Crispy samosa filled with spicy potato masala.",
      price: 80,
      rating: 4,
      time: "10-25 min",
      image: "src/assets/samosa.jpg"
    },

    {

      id: 7,
      name: "Paneer Roll",
      description: "Soft flatbread filled with spicy grilled paneer, fresh vegetables, and flavorful sauces.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: "src/assets/paneer roll.jpg"

    },

     {

      id: 8,
      name: "Vada Pav",
      description: "Spicy potato fritter served inside a soft pav with chutneys.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: "src/assets/vada pav.jpg"

    },

     {

      id: 9,
      name: "Chicken Manchuria",
      description: "Juicy chicken pieces coated in a delicious Indo-Chinese sauce.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: "src/assets/chicken manchuria.jpg"

    },


     {

      id: 10,
      name: "Paneer Tikka",
      description: "Grilled paneer cubes marinated in yogurt, spices, and herbs.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: "src/assets/paneer tikka.jpg"

    },


     {

      id: 11,
      name: "Spring Rolls",
      description: "Crispy rolls filled with seasoned vegetables and noodles.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: "src/assets/spring rolls.jpg"

    },


     {

      id: 12,
      name: "Mushroom 65",
      description: "Crispy mushrooms marinated with herbs and South Indian spices.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: "src/assets/mushroom 65.jpg"

    },


     {

      id: 13,
      name: "Chilli Paneer",
      description: "Soft paneer tossed with onions, peppers, and spicy chilli sauce.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: "src/assets/chilli paneer.jpg"

    },

     {

      id: 14,
      name: "Paneer 65",
      description: "Crispy paneer cubes seasoned with aromatic spices and herbs.",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: "src/assets/paneer 65.jpg"

    },

     {

      id: 15,
      name: "Chicken Wings",
      description: "Juicy chicken wings coated with flavorful spices and a crispy crust",
      price: 150,
      rating: 4.5,
      time: "10-25 min",
      image: "src/assets/chicken wings.jpg"

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
