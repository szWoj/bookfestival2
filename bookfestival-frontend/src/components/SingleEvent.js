import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import { useState, useEffect} from "react";
import EventService from "../services/EventService";
import VenueService from "../services/VenueService";


const SingleEvent = () => {

    const {id} = useParams();
    const[eventId, setEventId] = useState([id])
    const [event, setEvent] = useState([])
    const [venues, setVenues] = useState(["Dummy Venue Name"])
    const [venueId, setVenueId] = useState([])

    useEffect(() => {
        getEvents()
    }, [])

    useEffect(() => {
        getVenueName()
    }, [event])

    const getEvents = () => {

        EventService.getEvents().then((response) => {
            setEvent(response.data[eventId])
            console.log(response.data[eventId])
            //get the venue id based on the event id
            // const tempVenueId = getVenueId(eventId) 
        });
    };

    // this function should get the venue id based on the event id
    // then can feed it into the html instead of 0 in venues[0].name
    // const getVenueId = (eventId) => {
    //     VenueService.getVenues().then((response) => {
    //         setVenueId
    //     })
    // }

    const getVenueName = () => {
        VenueService.getVenues().then((response) => {
            setVenues(response.data);
        });
        // console.log(venues);
    }

    const convertToText = (html) => {
        var tempDivElement = document.createElement("div");
        tempDivElement.innerHTML = html;
        return tempDivElement.innerText;
    }

    
    return (
    <>
        <p>{convertToText(event.description)}</p>
        <p>Venue : {venues[0].name}</p>
        <p>Date & Time: {event.dateTime}</p>
        <p>Price: £{event.price}</p>
        <Link to={`/book-event/${eventId}`}>Book Event</Link>
    </>
)
    
}



export default SingleEvent;