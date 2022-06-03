import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import { useState, useEffect} from "react";
import EventService from "../services/EventService";


const SingleEvent = () => {

    const {id} = useParams();
    const[eventId, setEventId] = useState([id])
    const [event, setEvent] = useState([])

    useEffect(() => {
        getEvents()
        
    }, [])


    const getEvents = () => {

        EventService.getEvents().then((response) => {
            setEvent(response.data[eventId])
            console.log(response.data[eventId])
        });
    };

    const convertToText = (html) => {
        var tempDivElement = document.createElement("div");
        tempDivElement.innerHTML = html;
        return tempDivElement.innerText;
    }

    
    return (
    <>
        <p>{convertToText(event.description)}</p>
        <p>Venue : {event.venue.name}</p>
        <p>Date & Time: {event.dateTime}</p>
        <p>Price: £{event.price}</p>
        <Link to={`/book-event/${eventId}`}>Book Event</Link>
    </>
)
    
}



export default SingleEvent;