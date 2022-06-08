import React from 'react'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import {useState, useEffect} from 'react'

const CustomerCalendar = ({eventsList, customer, bookings, handleDelete}) => {

    const [date, setDate] = useState(new Date(2021, 7, 1)) 

    const events = eventsList.map((event) => {
        let container = {}
        container["title"] = event.title;
        container["start"] = event.dateTime;
        container["end"] = event.dateTime;
        // container["url"] = `/event/${(eventsList.find((event) => eventsList.title = event.title)).id}`;
        return container
       })

    console.log(events)

    const eventClick = (info) => {
        
        const eventObj = info.event;
        info.jsEvent.preventDefault()
        if (eventObj.start){
            // window.open(eventObj.url);
            alert(eventObj.title + ", " + eventObj.start)
            
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


export default CustomerCalendar;

