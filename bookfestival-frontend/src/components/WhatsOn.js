import { Link } from "react-router-dom";
import EventService from '../services/EventService';
import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import "./whatson.css"


const Home = () => {

    const [events, setEvents] = useState([])

    const {id} = useParams();


    useEffect(() => {
        getEvents()
    }, [])

    const getEvents = () => {

        EventService.getEvents().then((response) => {
            setEvents(response.data)
        });
    };
    

    const eventsList = events.map(event => {
        return (
            <div className = "whats-on-subgrouping">
            <div className = "image-container"><img className = "whats-on-picture" src={event.book.photoUrl}></img>
            <div class="book-now"><p><Link to={`/book-event/${events.indexOf(event)}`} className="book-now-text">Book Now</Link></p></div></div>
            <p><Link to={`/event/${events.indexOf(event)}`} class="event-titles">{event.title}</Link></p>
            </div>
        )
    })


    return (
        <div>
        <h1>What's On</h1>
        <div className = "whats-on-container">
            {eventsList}
        </div>
        </div>

    )
}

export default Home;