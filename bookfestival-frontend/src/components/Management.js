
import React, {useState, useEffect} from 'react'
import AuthorService from '../services/AuthorService'
import BookService from '../services/BookService'
import BookingService from '../services/BookingService'
import CustomerService from '../services/CustomerService'
import EventService from '../services/EventService'

const Management = () => {
    const[authors, setAuthors] = new useState([])
    const[books, setBooks] = new useState([])
    const[bookings, setBookings] = new useState([])
    const[customers, setCustomers] = new useState([])
    const[events, setEvents] = new useState([])

    useEffect(() => {
        getAuthors()
        getBooks()
        getBookings()
        getCustomers()
        getEvents()
    }, [])

    const getAuthors = () => {
        AuthorService.getAuthors().then((response) => {
            setAuthors(response.data)
        });
    };

    const getBooks = () => {
        BookService.getBooks().then((response) => {
            setBooks(response.data)
        });
    };
    const getBookings = () => {
        BookingService.getBookings().then((response) => {
            setBookings(response.data)
        });
    };

    const getCustomers = () => {
        CustomerService.getCustomers().then((response) => {
            setCustomers(response.data)
        });
    };

    const getEvents = () => {
        EventService.getEvents().then((response) => {
            setEvents(response.data)
        });
    };

    const getRevenue = () => {
        // function to add up prices of all booked events
        let revenue = 0;
        for (const booking of bookings) {
            revenue += booking.event.price
        }
        return revenue;
    }

    let revenue = getRevenue();

    const getEventsBooked = () => {
        //function to get number of events booked
        //bookings must be sorted by event id
        let eventsBooked = 0;
        let previousEventId = 0;
        for (const booking of bookings){
            if (booking.event.id !== previousEventId)
                {eventsBooked += 1
                previousEventId = booking.event.id}
        }
        return eventsBooked;
    }

    let eventsBooked = getEventsBooked();

    return (
    <>
        <h1>Management Info</h1>
        <p>Number of Authors = {authors.length}</p>
        <p>Number of Books = {books.length}</p>
        <p>Number of Events = {events.length}</p>
        <p>Number of Bookings = {bookings.length}</p>
        <p>Revenue = £{revenue}</p>
        <p>Number of Events Booked = {eventsBooked}</p>
        <p>Number of Customers = {customers.length}</p>
    </>
    )

}

export default Management;