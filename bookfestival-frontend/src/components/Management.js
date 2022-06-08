import React, {useState, useEffect, PureComponent} from 'react'
import AuthorService from '../services/AuthorService'
import BookService from '../services/BookService'
import BookingService from '../services/BookingService'
import CustomerService from '../services/CustomerService'
import EventService from '../services/EventService'
import { Chart } from "react-google-charts";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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
    const data1 = [
        ["Quantity", "Quantity"],
        ["Number of Authors", authors.length],
        ["Number of Books", books.length],
        ["Number of Events", events.length],
        ["Number of Bookings", bookings.length],
        ["Number of Events Booked", eventsBooked],
        ["Number of Customers", customers.length],
      ];
      const options1 = {
        title: "Numbers of the festival",
        chartArea: { width: "50%" },
        colors: ["#B0120A"],
        hAxis: {
          title: "Numbers of the festival",
          minValue: 0,
        },
        vAxis: {
          title: "Numbers of the festival",
        },
      };
    return (
    <>
        <h1>Management Info</h1>
        {/* <p>Number of Authors = {authors.length}</p>
        <p>Number of Books = {books.length}</p>
        <p>Number of Events = {events.length}</p>
        <p>Number of Bookings = {bookings.length}</p> */}
        <p>Revenue = £{revenue}</p>
        {/* <p>Number of Events Booked = {eventsBooked}</p>
        <p>Number of Customers = {customers.length}</p> */}
        <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data1}
      options={options1}
    />
    </>
    )
}
export default Management;