import { Link } from "react-router-dom";
import Calendar from "react-calendar"
import {useState} from "react";
import React from "react";
import moment from 'moment';

const EventCalendar = () => {

const [date, setDate] = useState(new Date())
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
