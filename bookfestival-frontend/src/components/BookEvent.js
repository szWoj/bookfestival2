import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import { useState, useEffect, Component} from "react";
import EventService from "../services/EventService";
import axios from "axios";


const BookEvent = () => {

    const{id} = useParams();
    const[eventId, setEventId] = useState([id])
    const [event, setEvent] = useState([])
    const[nameInput, setNameInput] = useState("")
    const[phoneInput, setPhoneInput] = useState("")
    const[emailInput, setEmailInput] = useState("")

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
        setNameInput(evt.target.value)
    }

    const handlePhoneChange = (evt) => {
        setPhoneInput(evt.target.value)
    }

    const handleEmailChange = (evt) => {
        setEmailInput(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.prevent.default();

        const customer = {
            name: nameInput,
            phone_number: phoneInput,
            email: emailInput
            
        }

        axios.post("http://localhost:8080/customers", customer)
        // axios.post("http://localhost:8080/bookings", customer, event)
        .then(res => {
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
                <input type="text" name="name" value={nameInput} onChange={handleNameChange}></input>
            </label>
            <label>
            Phone number
                <input type="number" name="phone" value={phoneInput} onChange={handlePhoneChange}></input>
            </label>
            <label>
            Email Address
                <input type="text" name="email" value={emailInput} onChange={handleEmailChange}></input>
            </label>
            <input type="submit" value="Book Now" />
        </form>
        </>
    )
}

export default BookEvent;