import './App.css';
import React from 'react';
import VenueComponent from './components/Venue';
import Home from './components/WhatsOn';
import SingleEvent from './components/SingleEvent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';




function App(){


    return (   
      <>
      <header>
        <NavBar />
      </header> 
       <Router>
        <div>
            <Routes>

             <Route exact path="/" element={<Home/>}/>
             <Route exact path="/venues" element={<VenueComponent/>}/>
             <Route exact path="/event/:id" element={<SingleEvent/>}/>

           </Routes>
        </div> 
      </Router></>  
    );
}

export default App;
