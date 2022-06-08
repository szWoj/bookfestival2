import { Link } from "react-router-dom";
import EventService from '../services/EventService';
import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import NavBar from "./NavBar";

const FilteredEvents = () => {

    const [freeEvents, setFreeEvents] = useState([])
    const [allEvents, setAllEvents] = useState([])
   
    

    useEffect(() => {
        getFreeEvents()
        getAllEvents()
    }, [])

    const getFreeEvents = () => {

        EventService.getFreeEvents().then((response) => {
            setFreeEvents(response.data)
        });
    };

    const getAllEvents = () => {
        EventService.getEvents().then((response) => {
            setAllEvents(response.data)
        });
    }




    const eventsList = freeEvents.map(event => {
        return (
            <div className = "whats-on-subgrouping">
            <div className = "image-container"><a href={`/event/${allEvents.indexOf(allEvents.find((e)=> e.title == event.title))}`} className = "whats-on-picture"><img src={event.book.photoUrl}></img></a>
            <div className="book-now"><p><Link to={`/book-event/${allEvents.indexOf(allEvents.find((e) => e.title == event.title))}`} className="book-now-text">Book Now</Link></p></div></div>
            <div className="event-title-container"><p className="event-title"><Link to={`/event/${allEvents.indexOf(allEvents.find((e) => e.title == event.title))}`} className="event-titles">{event.title}</Link></p></div>
            </div>
        )
    })

    return (
        <div>
        <div>
       <NavBar/></div>
        <div className="filtered-events-page">
            
            <h1 className="whats-on">Free Events</h1>
            <div className = "whats-on-container">
                {eventsList}
            </div>
        </div>
        </div>

    )

}



export default FilteredEvents;