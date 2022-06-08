import { useParams } from 'react-router';
import { useState, useEffect, Component, useRef} from "react";
import EventService from "../services/EventService";
import axios from "axios";
import CustomerService from "../services/CustomerService";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import NavBar from './NavBar';


const BookEvent = () => {

    const{id} = useParams();
    const[eventId, setEventId] = useState([id])
    const [event, setEvent] = useState([])
    const[name, setName] = useState({name: ""})
    const[phoneNumber, setPhoneNumber] = useState({phoneNumber: ""})
    const[email, setEmail] = useState({email:""})
    const[newCustomer, setNewCustomer] = useState([])
    const[existingCustomer, setExistingCustomer] = useState([])
    const form = useRef();



    useEffect(() => {
        getEvents()
    }, [])

    const getEvents = () => {

        EventService.getEvents().then((response) => {
            setEvent(response.data[eventId])
        });
    };

    const handleNameChange = (evt) => {
        setName({name: evt.target.value})
        console.log(name)
    }

    const handleEmailChange = (evt) => {
        setEmail({email: evt.target.value})
    }

    const handlePhoneNumberChange = (evt) => {
        setPhoneNumber({phoneNumber: evt.target.value})
    }

    const findOutTheCustomer = () =>{
        axios.get(`${process.env.REACT_APP_GETTING_EXISTING_CUSTOMER}`, {
            params: {
                email: email.email,
                phoneNumber: phoneNumber.phoneNumber,
                name: name.name
            }
        })
        .then(res => {
                console.log(res);
                console.log(res.data);
                setExistingCustomer(res.data) // ?res.data[0] //I only want to fire this off when existingCustomer is populated with not empty data
                console.log(existingCustomer);
                if(res.data == ""){
                    console.log("Customer not in db")
                    axios.post(`${process.env.REACT_APP_POSTING_A_NEW_CUSTOMER}`, {name: name.name, phoneNumber: phoneNumber.phoneNumber, email: email.email})
                    .then(res => {
                        // console.log(res);
                        console.log(res.data);
                        setNewCustomer(res.data)
                        console.log(newCustomer);
                    })
                }
        })
}

    const handleSubmit = (evt) => {

        evt.preventDefault();
        findOutTheCustomer();

        sendEmailConfirm(evt);

    }

    useEffect(() => {
        if(existingCustomer){ 
            postBookingExistingCustomer()
        }
    }, [existingCustomer])

    useEffect(() => {
        postBookingNewCustomer()
    }, [newCustomer])


    const postBookingNewCustomer = () => {
        const booking = {
            event: event,
            customer: newCustomer
        }
        axios.post(`${process.env.REACT_APP_POSTING_A_BOOKING}`, booking)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        console.log(booking)
        clearFields();

        clearFields();
    }
    const postBookingExistingCustomer = () => {
        const booking = {
            event: event,
            customer: existingCustomer[0]
        }
        axios.post(`${process.env.REACT_APP_POSTING_A_BOOKING}`, booking)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        console.log(booking)

        clearFields();
    }

    const clearFields = () => {
        document.getElementById("name").value="";
        document.getElementById("phoneNumber").value="";
        document.getElementById("email").value="";
    }

    
    
    
    const sendEmailConfirm = (evt) => {
        evt.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        evt.target.reset()
    }


    return ( 
        
        <>
        <div><NavBar/></div>
        <div className="book">
        <div className="book2">
        <h1 className="book-event-title">Book Event</h1>
        <div className="book-container">
        <p>{event.title}</p>
        <p>Date & time: {event.dateTime}</p>
        <p>Price: £{event.price}</p>
        <form ref={form} onSubmit={sendEmailConfirm} >
            <label className="lable">
            Name
            </label>
            <br></br>
            <input type="text" name="name" id="name" onChange={handleNameChange}></input>
            <br></br>
            <label>
            Phone number
            </label>
            <br></br>
            <input type="text" name="phoneNumber" id="phoneNumber" onChange={handlePhoneNumberChange}></input>
            <br></br>
            <label>
            Email Address
            </label>
            <br></br>
            <input type="text" name="email" id="email" onChange={handleEmailChange}></input>
            <br></br>
            <br></br>
            <button onClick={handleSubmit} class="book-button">Book Event</button>
            <br></br>
            <br></br>
            { existingCustomer == "" ?
            <Link className='view-calendar'to={`/calendar/${newCustomer.id}`}>View Calendar</Link> : <Link to={`/calendar/${existingCustomer[0].id}`}>View Calendar</Link>}
        </form></div></div></div>
        </>
    )
    }

export default BookEvent;