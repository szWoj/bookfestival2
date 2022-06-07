import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import {useState, useEffect} from "react";
import React from "react";
import CustomerService from "../services/CustomerService";
import CustomerCalendar from "./FullCalendar";
import axios from "axios";



const EventCalendar = () => {
    const {id} = useParams();
    const[customerId, setCustomerId] = useState([id])
    const[customer, setCustomer] = new useState([])
    const[bookings, setBookings] = new useState([])
    const[events, setEvents] = new useState([])

useEffect(() => {
    getCustomer()
}, [])

const findId = (data) => {
    for (var i = 0; i < data.length; i++){
        if (data[i].id == customerId){
            return data.indexOf(data[i])
        }
    }
}

const getCustomer = () => {

    CustomerService.getCustomers().then((response) => {
        setCustomer(response.data[findId(response.data)])
        setBookings(response.data[findId(response.data)].bookings)
        setEvents(response.data[findId(response.data)].bookings.map(booking => booking.event))
    });

}

const handleDelete = (evt) => {
    bookings.forEach(((booking) => {
        if (booking.event.title === evt.title) {
            const url = `${process.env.REACT_APP_LINK_TO_DELETE_BOOKING}` + booking.id
            axios.delete(url)
            .then(res => {  
                console.log(res);  
                console.log(res.data);  
                console.log(url)})
        }
    }));
    window.location.reload()
}

console.log(bookings[0])


    return (
    <div>
      <CustomerCalendar customer={customer} bookings={bookings} eventsList={events} 
      handleDelete={handleDelete}
      />
    </div>)
    
}

export default EventCalendar;
