import React from 'react'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import {useState, useEffect} from 'react'
import { NavItem } from 'reactstrap'
import { calendarFormat } from 'moment'
import { Calendar } from 'react-calendar'

const BigCalendar = ({eventsList, customer, bookings, handleDelete}) => {

    const [date, setDate] = useState(new Date(2021, 7, 1)) 

    const events = eventsList.map((event) => {
        let container = {}
        container["title"] = event.title;
        container["start"] = event.dateTime;
        container["end"] = event.dateTime;
        return container
       })

    console.log(events)

    const eventClick = (info) => {
        const eventObj = info.event;
        if (eventObj.start){
            alert("Event: " + eventObj.title + " at " + eventObj.start)
        }
    }

    const deleteEvent = (event) => {
        handleDelete(event)
    }

    const bookingsList = (eventsList) => {
        return eventsList.map((event) => {
            let container = {}
            container["title"] = event.title;
            container["date"] = (event.dateTime);
            return (
            <div>
            <p>{container.title}</p>
            <button onClick={() => deleteEvent(event)}>Delete event</button>
            </div>
            )
        })
    }
      

    return (
        <div>
        <div>
        {bookingsList(eventsList)}
        </div>
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        initialDate={date}
        events={events} 
        eventClick={eventClick}
      />
      
      </div>
    )
}


export default BigCalendar;

