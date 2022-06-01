import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import { useState, useEffect} from "react";
import EventService from "../services/EventService";
import BookEvent from "./BookEvent";


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
            console.log(response.data[eventId]);
        });
    };

    
    return (
    <>
        <p>{event.description}</p>
        <BookEvent/>
        {/* <p>{event.description.replace(/&quot;|&#039;|&Idquo;|&rdquo;|;|&rsquo;/g, "'").replace(/&euml;/g, "ë").replace(/&ntilde/g, "ñ").replace(/&uacute;/g, "ú").replace(/&aacute;|&eacute/g, "á").replace(/&amp'/g, "&")}</p> // */} 
        {/* needs useEffect - so its fetched first then filtered */}
    </>
)
    
}



export default SingleEvent;