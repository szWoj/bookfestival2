import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import { useState, useEffect, Component} from "react";
import EventService from "../services/EventService";
import axios from "axios";


const BookEvent = () => {

    const{id} = useParams();
    const[eventId, setEventId] = useState([id])
    const [event, setEvent] = useState([])
    // const[nameInput, setNameInput] = useState("")
    // const[phoneInput, setPhoneInput] = useState("")
    // const[emailInput, setEmailInput] = useState("")

    const[customer, setCustomer] = useState({
        name: '',
        phone_number: '',
        email: '',
    })

    useEffect(() => {
        getEvents()
    }, [])

    const getEvents = () => {

        EventService.getEvents().then((response) => {
            setEvent(response.data[eventId])
            console.log(response.data[eventId]);
        });
    };

    // const handleNameChange = (evt) => {
    //     setNameInput(evt.target.value)
    // }

    // const handlePhoneChange = (evt) => {
    //     setPhoneInput(evt.target.value)
    // }

    // const handleEmailChange = (evt) => {
    //     setEmailInput(evt.target.value)
    // }

    const handleNameChange = (evt) => {
        setCustomer({name: evt.target.value})
    }

    const handleEmailChange = (evt) => {
        setCustomer({email: evt.target.value})
    }

    const handlePhoneNumberChange = (evt) => {
        setCustomer({email: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt)
        setCustomer({name: evt.target.name, phone_number: evt.target.phone_number, email: evt.target.email}, () => console.log(customer.name))
       


        axios.post("http://localhost:8080/customers", {name: customer.name, name: customer.phone_number, email: customer.email})
        // axios.post("http://localhost:8080/bookings", customer, event)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

        
    }

    
   


    return ( 
        
        <>
        <h1>Book Event</h1>
        <p>{event.title}</p>
        <p>Date & time: {event.dateTime}</p>
        <p>Price: £{event.price}</p>
        <form onSubmit={handleSubmit}>
            <label>
            Name
            </label>
            <input type="text" name="name"  onChange={handleNameChange}></input>
            <label>
            Phone number
            </label>
            <input type="number" name="phone_number" onChange={handlePhoneNumberChange}></input>
            <label>
            Email Address
               
            </label>
            <input type="text" name="email"  onChange={handleEmailChange}></input>
            <button>Book Now</button>
        </form>
        </>
    )
}

export default BookEvent;