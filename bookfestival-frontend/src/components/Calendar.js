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

const datesAndTimesList = []
const dates = []
const times = []

const getEventsDates = events.map(event => {
    datesAndTimesList.push(event.dateTime.split(' '))
})

const getTimes = datesAndTimesList.map(time =>{
    times.push(time[1])
})

const getDates = datesAndTimesList.map(date => {
    dates.push(date[0])
})

// const getMonth = (date) => {
//     const parts = date.split('-')
//     return parts[1]
// }

console.log(times[0])
console.log(dates[0])
console.log(date.getMonth())
console.log(date.getDate())

    return (
        <>
        <h2>Hello Calendar</h2>
        <Calendar
            className="calendar"
            value={date}
            onChange={changeDate}
            // tileContent={({ date, view }) => view === 'month' && date.getMonth() == getMonth(dates[0]) ? <p>"Hello"</p> : null}
        />
        <p>Current selected date is <b>{moment(date).format('MMMM Do YYYY')}</b></p>
       <div>{eventsList}</div>
        </>

    )
}

export default EventCalendar;
