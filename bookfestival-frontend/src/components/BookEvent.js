import { useParams } from 'react-router';
import { useState, useEffect, Component} from "react";
import EventService from "../services/EventService";
import axios from "axios";


const BookEvent = () => {

    const{id} = useParams();
    const[eventId, setEventId] = useState([id])
    const [event, setEvent] = useState([])
    const[name, setName] = useState({name: ""})
    const[phoneNumber, setPhoneNumber] = useState({phoneNumber: ""})
    const[email, setEmail] = useState({email:""})


    useEffect(() => {
        getEvents()
    }, [])

    const getEvents = () => {

        EventService.getEvents().then((response) => {
            setEvent(response.data[eventId])
            console.log(response.data[eventId]);
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

    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios.post("http://localhost:8080/customers", {name: name.name, phoneNumber: phoneNumber.phoneNumber, email: email.email, booking: {event}})
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
            <input type="text" name="phoneNumber" onChange={handlePhoneNumberChange}></input>
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