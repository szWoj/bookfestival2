import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import {useState, useEffect} from "react";
import React from "react";
import CustomerService from "../services/CustomerService";
import BigCalendar from "./FullCalendar";



const EventCalendar = () => {
    const {id} = useParams();
    const[customerId, setCustomerId] = useState([id])
    const[customer, setCustomer] = new useState([])
    const[bookings, setBookings] = new useState([])
    const[events, setEvents] = new useState([])
    const [date, setDate] = useState(new Date(2021, 7, 1))

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

const datesAndTimesList = []
// const dates = []
// const times = []

const getEventsDates = events.map(event => {
    datesAndTimesList.push(event.dateTime.split(' '))
})

const getTimes = datesAndTimesList.map(time => {
    return time[1]
})

const getDates = datesAndTimesList.map(date => {
    return date[0]
})


console.log(getDates)
console.log(getTimes)

// console.log(getTimes[0].split(':'))

console.log(date.getMonth())
console.log(date.getDate())



    return (
      <BigCalendar customer={customer} bookings={bookings} eventsList={events}/>)
}

export default EventCalendar;
