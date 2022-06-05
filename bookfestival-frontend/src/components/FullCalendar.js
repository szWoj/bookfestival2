import React from 'react'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import {useState, useEffect} from 'react'
import { NavItem } from 'reactstrap'
import { calendarFormat } from 'moment'
import { Calendar } from 'react-calendar'

const BigCalendar = ({eventsList, customer, bookings}) => {

    const [date, setDate] = useState(new Date(2021, 7, 1)) 

    const events = eventsList.map((event) => {
        let container = {}
        container["title"] = event.title;
        container["start"] = (event.dateTime.split(' '))[0];
        container["end"] = (event.dateTime.split(' '))[0];
        return container
       })

    console.log(events)
      

    return (
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        initialDate={date}
        events={events} 
      />
    )
}


export default BigCalendar;

