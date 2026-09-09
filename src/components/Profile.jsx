import React, { useRef, useState , useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBoxOpen, faCamera, faCheck, faEnvelope, faHeart, faLocationDot, faPen,
  faPhone, faXmark, faStar, faBell, faMoon, faGear, faSun , 
  faUser
} from '@fortawesome/free-solid-svg-icons';


export default function Profile() {

const [darkMode, setDarkMode] = useState(false);

  const [user, setUser] = useState({

    name: "Sai Harshith",
    email: "sai@gmail.com",
    phone: "9876543210",
    address: "Hyderabad, Telangana",
    favoriteFood: "Paneer Pizza"

  });

  const [popup, setpopup] = useState("")

  const [image, setImage] = useState("");

  const [imgURL, setimgURL] = useState("")
  const [newProduct, setnewProduct] = useState(true)
  const [edit, setEdit] = useState(false)

  const nameRef = useRef(null)

  const fileRef = useRef(null)

  const favouriteFoods = [

    {

      id: 1,
      name: "Paneer Pizza",
      rating: 4.8,
      price: 250,
      image: "src/assets/paneer pizza.jpg"

    },

    {

      id: 2,
      name: "Veg Burger",
      rating: 4.6,
      price: 150,
      image: "src/assets/Burger.jpg"

    },

    {

      id: 3,
      name: "Veg Manchuria",
      rating: 4.7,
      price: 180,
      image: "src/assets/manchuria.jpg"

    },

    {

      id: 4,
      name: "French Fries",
      rating: 4.5,
      price: 150,
      image: "src/assets/french fries.jpg"

    }
  ]

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (file) {
      const preview = URL.createObjectURL(file)
      setimgURL(preview)
      setnewProduct(false)

    }

    const reader = new FileReader();

    reader.onload = () => {

      setImage(reader.result);

      showPopup("Profile picture updated!");

    };

    reader.readAsDataURL(file);

  }

  const removeImage = () => {

    setImage(profileImage)
    showPopup("Profile Picture Removed!")
  }

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value

    })

  }

  const handleEdit = () => {

    setEdit(true)

    setTimeout(() => {

      if (nameRef.current) {

        nameRef.current.focus();

      }
    }, 100)
  }


  const handleSave = () => {

    localStorage.setItem(
      "flavorhubProfile",
      JSON.stringify(user)
    )

    setEdit(false)

    setpopup(" Profile Updated Successfully!");

    setTimeout(() => {
      setpopup("");
    }, 2500);

  }

  const handleCancel = () => {

    const savedUser =
      localStorage.getItem("flavorhubProfile");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setEdit(false);

  };

  const handleDarkMode = () => {

    const value = !darkMode;

    setDarkMode(value);

    localStorage.setItem(
      "flavorhubDarkMode",
      value
    );

  };


  return (


    <div className={darkMode ? 'profile-page dark' : 'profile-page'}>

      {popup && (

        <div className="ppopup">

          <FontAwesomeIcon icon={faCheck} />

          {popup}

        </div>

      )}

      <div className="banner">

        <div className="photo">

          <img src= {imgURL} alt="" />

          <button className='btn' onClick={() => fileRef.current.click()}>
            <FontAwesomeIcon icon={faCamera} />
          </button>

          <input type="file" name="" ref={fileRef} accept='image/*' onChange={handleImage} hidden />
        </div>

        <div className="title">

          <h2>{user.name}</h2>

          <p>
            <FontAwesomeIcon icon={faHeart} />
            &nbsp; Food Lover
          </p>

          <span className='good'>
            Good food makes a good mood!
          </span>

          <div className="mini" style={{marginTop: "18px"}}>

            <span>
              <FontAwesomeIcon icon={faEnvelope}  />
              <span style={{marginLeft: "5px"}}> {user.email} </span>
            </span>

            <span>
              <FontAwesomeIcon icon={faPhone} />
              <span style={{marginLeft: "5px"}}> {user.phone} </span>
            </span>

            <span>
              <FontAwesomeIcon icon={faLocationDot} />
              <span style={{marginLeft: "5px"}}> {user.address} </span>
            </span>

          </div>

          <div className="btns">

            {!edit ? (

              <button className='editbtn' onClick={handleEdit}>
                <FontAwesomeIcon icon={faPen} />
                Edit
              </button>
            ) : (

              <>
                <button className='savebtn' onClick={handleSave}>
                  <FontAwesomeIcon icon={faCheck} />
                  Save
                </button>

                <button className='cancelbtn' onClick={handleCancel}>
                  <FontAwesomeIcon icon={faXmark} />
                  Cancel
                </button>
              </>
            )}
          </div>

        </div>

      </div>

      <div className="stats">

        <div className="card">

          <FontAwesomeIcon icon={faBoxOpen} />

          <h2>30</h2>

          <p>Total Orders</p>
        </div>

        <div className="card">

          <FontAwesomeIcon icon={faHeart} />

          <h2>4</h2>

          <p>Favorites</p>

        </div>

        <div className="card">

          <FontAwesomeIcon icon={faStar} />

          <h2>4.8</h2>

          <p>Rating</p>

        </div>
      </div>

      <div className="psection">

        <h2>
          <FontAwesomeIcon icon={faUser} />
          Personal Information
        </h2>

        <div className="pgrid">

          <div className="pfield">

            <label htmlFor="">
              <FontAwesomeIcon icon={faUser} />
              Name
            </label>

            {edit ? (

              <input ref={nameRef} type="text" name="name" value={user.name} onChange={handleChange}
              />

            ) : (

              <p>
                {user.name}
              </p>

            )}

          </div>

          <div className="pfield">

            <label htmlFor="">
              <FontAwesomeIcon icon={faEnvelope} />
              Email
            </label>

            {edit ? (

              <input type="email" name="email" value={user.email} onChange={handleChange} />
            ) : (

              <p> {user.email} </p>
            )}

          </div>

          <div className="pfield">

            <label htmlFor="">

              <FontAwesomeIcon icon={faPhone} />
              Phone
            </label>

            {edit ? (

              <input type="tel" name="phone" value={user.phone} onChange={handleChange} />
            ) : (

              <p> {user.phone} </p>
            )}
          </div>

          <div className="pfield">

            <label htmlFor="">
              <FontAwesomeIcon icon={faLocationDot} />
              Address
            </label>

            {edit ? (

              <input type="text" name="address" value={user.address} onChange={handleChange} />
            ) : (

              <p> {user.address} </p>
            )}
          </div>

          <div className="pfield">

            <label>

              <FontAwesomeIcon icon={faHeart} />
              Favorite Food
            </label>

            {edit ? (

              <input type="text" name="favoriteFood" value={user.favoriteFood} onChange={handleChange} />

            ) : (

              <p>
                {user.favoriteFood}
              </p>

            )}

          </div>
        </div>
      </div>

      <div className="favourite">

        <h2>

          <FontAwesomeIcon icon={faHeart} />
          Favorite Foods
        </h2>

        {favouriteFoods.map((food) => (

          <div className='food-card' key={food.id}>

            <div className='food-img'>

              <img src={food.image} alt={food.name} />

            </div>

            <div className="finfo">

              <h3> {food.name} </h3>

              <span>
                <FontAwesomeIcon icon={faStar} />
                {food.rating}

              </span>

              <p>
                ₹{food.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="profile-section">


        <div className="settings">

          <h2>
            <FontAwesomeIcon icon={faGear} />
            Settings
          </h2>

          <div className="sitem">
            <div className="sinfo">
              <FontAwesomeIcon icon={ darkMode ? faMoon : faSun } />

              <div>
                <h3>Dark Mode</h3>
                <p>Switch between light and dark appearance</p>
              </div>
            </div>

            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={handleDarkMode}
              />
              <span className="slider"></span>
            </label>
          </div>

        </div>

      </div>

    </div>
  )
}
