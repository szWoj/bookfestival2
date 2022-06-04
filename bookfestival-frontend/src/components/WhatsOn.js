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
            <>
            <li><img className = "whats-on-picture" src={event.book.photoUrl}></img></li>
            <li><Link to={`/event/${events.indexOf(event)}`}>{event.book.author.name}</Link></li>
            </>
        )
    })


    return (
        <>
        <h1>What's On</h1>
        <ul>
            {eventsList}
        </ul>
        </>

    )
}

export default Home;