import { Link } from "react-router-dom";
import Calendar from "react-calendar"
import { useParams } from 'react-router';
import {useState, useEffect} from "react";
import React from "react";
import moment from 'moment';
import CustomerService from "../services/CustomerService";

const EventCalendar = () => {
    const {id} = useParams();
    const[customerId, setCustomerId] = useState([id])
    const [date, setDate] = useState(new Date(2021, 7, 1))
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
        console.log(response.data[findId(response.data)])
       
    });

}


const changeDate = (evt) => {
    setDate(evt)
}

console.log(bookings)
console.log(events)

const eventsList = events.map(event => {
    return (
        <p>{event.book.title}, {event.dateTime}</p>
    )
})


const eventsDates = events.map(event => {
        
    
})



    return (
        <>
        <h2>Hello Calendar</h2>
        <Calendar
            className="calendar"
            value={date}
            onChange={changeDate}
            tileContent={({ date, view }) => view === 'month' && date.getDay() === 1 ? <p>{eventsDates}</p> : null}
        />
        <p>Current selected date is <b>{moment(date).format('MMMM Do YYYY')}</b></p>
       <div>{eventsList}</div>
        </>

    )
}

export default EventCalendar;
