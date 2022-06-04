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
    const[theCustomer, setTheCustomer] = useState([])
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
        
        
        
        
            // setTheCustomer({})
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
                    setExistingCustomer(res.data)
                    if(res.data == ""){
            
                        console.log("Customer not in db")
                        axios.post("http://localhost:8080/customers", {name: name.name, phoneNumber: phoneNumber.phoneNumber, email: email.email})
                        .then(res => {
                            // console.log(res);
                            console.log(res.data);
                            setTheCustomer(res.data)
                            
                        })
            
                        
                    }
            // .then(function (response){
            //     console.log(response)
            //     setTheCustomer(response);
            
        
        
        
        })
            


            // axios.post("http://localhost:8080/customers", {name: name.name, phoneNumber: phoneNumber.phoneNumber, email: email.email})
            // .then(res => {
            //     console.log(res);
            //     console.log(res.data);
            //     // setTheCustomer(res.data)
                
            // })

            
        
        
        
}
// console.log(theCustomer)

    const handleSubmit = (evt) => {
        evt.preventDefault();

        findOutTheCustomer()


        // axios.post("http://localhost:8080/customers", {name: name.name, phoneNumber: phoneNumber.phoneNumber, email: email.email})
        // .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        //     setTheCustomer(res.data)
            
        // })
        
    }
    // console.log(theCustomer)
    
    useEffect(() => {
          
        postBooking()
    }, [existingCustomer])

    // useEffect(()=>{
    //     postBookingExistingCustomer()
    // },[existingCustomer])

    const postBooking = () => {

        const booking = {
            event: event,
            customer: theCustomer
        }

        axios.post("http://localhost:8080/bookings", booking)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        console.log(booking)
    }

    // const postBookingExistingCustomer = () => {

    //     const booking = {
    //         event: event,
    //         customer: theCustomer
    //     }

    //     axios.post("http://localhost:8080/bookings", booking)
    //     .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     })
    //     console.log(booking)
    // }


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