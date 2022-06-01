import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import { useState, useEffect} from "react";
import EventService from "../services/EventService";

const BookEvent = () => {

    const{id} = useParams();
    const[eventId, setEventId] = useState([id])
    const [event, setEvent] = useState([])

    useEffect(() => {
        getEvents()
    }, [])

    const getEvents = () => {

        EventService.getEvents().then((response) => {
            setEvent(response.data[eventId])
            console.log(response.data[eventId]);
        });
    };


    return (
        <>
        <h1>Book Event</h1>
        <p>{event.title}</p>
        <p>Date & time: {event.dateTime}</p>
        <p>Price: £{event.price}</p>
        <button>Book Now</button>
        </>
    )
}

export default BookEvent;