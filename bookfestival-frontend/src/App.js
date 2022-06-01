import './App.css';
import React from 'react';
import VenueComponent from './components/Venue';
import Home from './components/WhatsOn';
import SingleEvent from './components/SingleEvent';
import Calendar from './components/Calendar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EventCalendar from './components/Calendar';




function App(){


    return (   
      <>
      <header>
        <h1>Navigation</h1>
      </header> 
       <Router>
        <div>
            <Routes>

             <Route exact path="/" element={<Home/>}/>
             <Route exact path="/venues" element={<VenueComponent/>}/>
             <Route exact path="/event/:id" element={<SingleEvent/>}/>
             <Route exact path="/calendar" element={<EventCalendar/>}/>

           </Routes>
        </div> 
      </Router></>  
    );
}

export default App;
