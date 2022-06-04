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
    const [date, setDate] = useState(new Date())
    const[customer, setCustomer] = new useState([])


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
        console.log(response.data[findId(response.data)])
        //get the venue id based on the event id
        // const tempVenueId = getVenueId(eventId) 
    });

}

console.log(customer)

const changeDate = (evt) => {
    setDate(evt)
}

    return (
        <>
        <h2>Hello Calendar</h2>
        <Calendar
            value={date}
            onChange={changeDate}
        />
        <p>Current selected date is <b>{moment(date).format('MMMM Do YYYY')}</b></p>
        </>

    )
}

export default EventCalendar;
