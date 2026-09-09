import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useRef, useState } from 'react'

export default function Contact() {

    const nameRef = useRef();

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        subject: "",
        message: ""

    })

    const [submitted, setSubmitted] = useState(false);

    const contactInfo = [

        {

            icon: faLocationDot,
            title: "Address",
            value: "123 Food Street, Hyderabad"
        },

        {

            icon: faPhone,
            title: "Phone",
            value: "+91 98765 43210"

        },

        {

            icon: faEnvelope,
            title: "Email",
            value: "flavorhub@gmail.com"

        },

        {

            icon: faClock,
            title: "Opening Hours",
            value: "Monday - Friday --10:00 AM - 6:00 PM",
            values: "Saturday - Sunday -- 10:00 AM - 11:00 PM"
        }
    ]

    useEffect(() => {

        const saved = localStorage.getItem("flavourhub")

        if (saved) {

            setFormData(JSON.parse(saved))
        }

        nameRef.current.focus();

    }, [])

    const handlechange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        setSubmitted(false);
    };


    const handleSubmit = (e) => {

        e.preventDefault();

        localStorage.setItem(
            "flavorhub",
            JSON.stringify(formData)
        );

        alert("Message sent successfully!");
    };


    return (


        <div>

            <div className='contact-us'>
                <h2>Contact Us </h2>

                <p className="subtitle">
                    Have a question? We'd love to hear from you!
                </p>
            </div>

            <div className='info'>

                <div className='contact-info'>

                    <h2>Get in Touch</h2>

                    {contactInfo.map((item, index) => (

                        <div
                            className="contact-items"
                            key={index}
                        >

                            <label htmlFor="">
                                <FontAwesomeIcon icon={item.icon} className='icons' style={{ fontSize: "24px", color: "blue" }} />
                                <span style={{ marginLeft: "7px", fontSize: "25px", fontWeight: "bold" }}>{item.title} </span>
                            </label>

                            <p style={{ marginTop: "10px" }}>{item.value}</p>

                            <p style={{ marginTop: "10px" }}>{item.values}</p>
                        </div>

                    ))}
                </div>

                <div className='form'>

                    <h2>Send Us a Message</h2>

                    <form action="" className='forms' onSubmit={handleSubmit}>

                        <div className='group'>

                            <label htmlFor=""> Name: </label>
                            <input type="text" name="name" placeholder='Enter your name..' ref={nameRef}
                                value={formData.name} onChange={handlechange}
                            />
                        </div>

                        <div className='group'>
                            <label htmlFor=""> Email: </label>
                            <input type="email" name="email" placeholder='Enter your email..'
                                value={formData.email} onChange={handlechange}
                            />
                        </div>

                        <div className='group'>
                            <label htmlFor=""> Subject: </label>
                            <input type="text" name="subject" placeholder='Enter your subject..'
                                value={formData.subject} onChange={handlechange}
                            />
                        </div>

                        <div className="group">
                            <label htmlFor=""> Message: </label>
                            <input type="text" name="message" placeholder='Enter your message..'
                                value={formData.message} onChange={handlechange}
                            />
                        </div>

                        <button type='submit' className='send' onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmit(e)
                            }
                        }}>
                            Send Message
                        </button>

                        {submitted && (
                            <p className="success">
                                Message sent successfully!
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}
