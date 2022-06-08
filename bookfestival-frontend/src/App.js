import './App.css';
import React from 'react';
import VenueComponent from './components/Venue';
import Home from './components/WhatsOn';
import SingleEvent from './components/SingleEvent';
import BookEvent from './components/BookEvent';
import Calendar from './components/Calendar';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EventCalendar from './components/Calendar';
import MainCalendar from './components/MainCalendar';
import FilteredEvents from './components/FilteredEvents';
import FilteredEvents3 from './components/FilteredEvents3';
import FilteredEvents2 from './components/FilteredEvents2';
import Management from './components/Management';





function App(){


    return (   
      <>
      
       <Router >
            <Routes>
             <Route exact path="/" element={<Home/>}/>
             <Route exact path="/venues" element={<VenueComponent/>}/>
             <Route exact path="/event/:id" element={<SingleEvent/>}/>
             <Route exact path="/calendar/:id" element={<EventCalendar/>}/>
             <Route exact path="/book-event/:id" element={<BookEvent/>}/>
             <Route exact path="/calendar" element={<MainCalendar/>}/>
             <Route exact path="/free" element={<FilteredEvents/>}/>
             <Route exact path="/midRange" element={<FilteredEvents2/>}/>
             <Route exact path="/expensive" element={<FilteredEvents3/>}/>
             <Route exact path="/management" element={<Management/>}/>
           </Routes>
      </Router></>  
    );
}

export default App;
