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
import DemoApp from './components/FullCalendar';




function App(){


    return (   
      <>
      <header>
        <NavBar/>
      </header> 
       <Router>
        <div>
            <Routes>

             <Route exact path="/" element={<Home/>}/>
             <Route exact path="/venues" element={<VenueComponent/>}/>
             <Route exact path="/event/:id" element={<SingleEvent/>}/>
             <Route exact path="/calendar/:id" element={<EventCalendar/>}/>
             <Route exact path="/book-event/:id" element={<BookEvent/>}/>
             {/* <Route exact path="/calendar" element={<DemoApp/>}/> */}

           </Routes>
        </div> 
      </Router></>  
    );
}

export default App;
