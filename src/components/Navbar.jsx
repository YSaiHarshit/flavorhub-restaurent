import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {



    return (


        <div className='nav'>

            <div>
                <Link to="" style={{ textDecoration: "none", color: "white" }}>
                    <h2 style={{fontSize: "30px"}}>FlavorHub</h2>
                </Link>
            </div>


            <div className="nav-middle">

                <Link to="/" className='home' style={{ textDecoration: "none", color: "white" }}>
                    <h2>Home</h2>
                </Link>
                <Link to="/about" className='about' style={{ textDecoration: "none", color: "white" }}>
                    <h2>About</h2>
                </Link>
                <Link to="/services" className='services' style={{ textDecoration: "none", color: "white" }}>
                    <h2> Services</h2>
                </Link>
                <Link to="/contact" className='contact' style={{ textDecoration: "none", color: "white" }}>
                    <h2> Contact </h2>
                </Link>

                <Link to="/profile" className='profile' style={{ textDecoration: "none", color: "white" }}>
                    <h2> Profile </h2>
                </Link>

            </div>
        </div>
    )
}
