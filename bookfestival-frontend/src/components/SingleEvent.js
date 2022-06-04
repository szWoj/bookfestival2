import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import { useState, useEffect} from "react";
import EventService from "../services/EventService";
import "./singleevent.css"


const SingleEvent = () => {

    const {id} = useParams();
    const[eventId, setEventId] = useState([id])
    const [event, setEvent] = useState([])
    const [venue, setVenue] = useState([])
    const [book, setBook] = useState([])
    
    useEffect(() => {
        getEvents()
    }, [])

    useEffect(() => {
        getVenue()
    }, [event])


    useEffect(() => {
        getBook()
    }, [event])

    const getEvents = () => {
        EventService.getEvents().then((response) => {
            setEvent(response.data[eventId])
        })
    };

    const getBook = () => {
        EventService.getEvents().then((response) => {
            setBook(response.data[eventId].book)
        });
    };


    const getVenue = () => {
        EventService.getEvents().then((response) => {
            setVenue(response.data[eventId].venue)
        });
    }


    const convertToText = (html) => {
        var tempDivElement = document.createElement("div");
        tempDivElement.innerHTML = html;
        return tempDivElement.innerText;
    }

    
    return (
    <div className="single-event-page">
        <img className="single-event-picture" src={book.photoUrl}/>
        <p></p>
        <p className="single-event-description">{convertToText(event.description)}</p>
        <p className="single-event-text">Venue : {venue.name}</p>
        <p className="single-event-text">Date & Time: {event.dateTime}</p>
        <p className="single-event-text">Price: £{event.price}</p>
        <p className="single-event-text"><Link to={`/book-event/${eventId}`}>Book Event</Link></p>
    </div>
)
    
}



export default SingleEvent;