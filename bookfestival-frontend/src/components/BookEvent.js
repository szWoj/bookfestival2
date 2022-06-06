import { useParams } from 'react-router';
import { useState, useEffect, Component} from "react";
import EventService from "../services/EventService";
import axios from "axios";
import CustomerService from "../services/CustomerService";


const BookEvent = () => {

    const{id} = useParams();
    const[eventId, setEventId] = useState([id])
    const [event, setEvent] = useState([])
    const[name, setName] = useState({name: ""})
    const[phoneNumber, setPhoneNumber] = useState({phoneNumber: ""})
    const[email, setEmail] = useState({email:""})
    const[newCustomer, setNewCustomer] = useState([])
    const[existingCustomer, setExistingCustomer] = useState([])


    
    
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
        // console.log(name)
    }

    const handleEmailChange = (evt) => {
        setEmail({email: evt.target.value})
    }

    const handlePhoneNumberChange = (evt) => {
        setPhoneNumber({phoneNumber: evt.target.value})
    }

    const findOutTheCustomer = () =>{
        
            axios.get('http://localhost:8080/customer', {
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
                        axios.post("http://localhost:8080/customers", {name: name.name, phoneNumber: phoneNumber.phoneNumber, email: email.email})
                        .then(res => {
                            // console.log(res);
                            console.log(res.data);
                            setNewCustomer(res.data)
                            console.log(newCustomer);
                            
                        })
                    }
            })
            
    }
    console.log(existingCustomer);
    console.log(newCustomer)
    
    const handleSubmit = (evt) => {
        evt.preventDefault();

        findOutTheCustomer()
        
        }

    useEffect(() => {
        if(existingCustomer.length){ //execute it anytime it changes - or stays the same - , except when it changes to null
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

        axios.post("http://localhost:8080/bookings", booking)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        console.log(booking)
        
    }

    const postBookingExistingCustomer = () => {

        const booking = {
            event: event,
            customer: existingCustomer[0]
        }

        axios.post("http://localhost:8080/bookings", booking)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        console.log(booking)
        
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