import { Link } from "react-router-dom";
import EventService from '../services/EventService';
import { useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import NavBar from "./NavBar";




const MainCalendar = () => {

    const [events, setEvents] = useState([])
    const [date, setDate] = useState(new Date(2021, 7, 1)) 

    useEffect(() => {
            getEvents()
        }, [])

    const getEvents = () => {

        EventService.getEvents().then((response) => {
            setEvents(response.data)
        });
    
    };

    console.log(events)

    const calendarEvents = events.map((event) => {
        let container = {}
        container["title"] = event.title;
        container["start"] = event.dateTime;
        container["end"] = event.dateTime;
        container["url"] = `/event/${events.indexOf(events.find((e) => e.title == event.title))}`;
        return container
       })

    const eventClick = (info) => {
        info.jsEvent.preventDefault()
        const eventObj = info.event;
        if(eventObj.url){
            window.open(eventObj.url)
            // console.log(eventObj.ur)
        }
    }

    return (
        <>
        <div>
       <NavBar/></div>
        <div className="calendar-container"> 
        <FullCalendar 
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        initialDate={date}
        events={calendarEvents} 
        eventClick={eventClick}
        
      />
      
      </div></>
    )


};


export default MainCalendar;