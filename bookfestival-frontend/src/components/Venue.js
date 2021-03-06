import React, {useState, useEffect} from 'react'
import VenueService from '../services/VenueService';
import { Loader } from "@googlemaps/js-api-loader"
import './map.css';
import NavBar from './NavBar';

function VenueComponent() {

    const [venues, setVenues] = useState([])
    const [location, setlocation] = useState({
            lat: 59.945378,
            lng: -2.198298
        })

    useEffect(() => {
        getVenues()
    },[])

    useEffect( () => {
        if(venues.length){
            setlocation(
                {lat: venues[0].latitude, lng: venues[0].longitude}
            )
        }
    }, [venues])

    const getVenues = () => {

        VenueService.getVenues().then((response) => {
            setVenues(response.data);
        });
        console.log(venues);
    };
    
    const loader = new Loader({
        apiKey: `${process.env.REACT_APP_MAP_KEY}`
      });
      
    loader
    .load()
    .then((google) => {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 17
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
      });
    })
    .catch (e => {
        console.log(e)
    });



    return <>
    <div>
       <NavBar/></div>

        <div className = "container">
            <h2 className="map-h2">Come and Visit Us At the Edinburgh College of Art</h2>
             <div id="map">
             </div>

            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th className="table-title"> Venue name</th>
                        <th className="table-title"> Venue address</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        venues.map(
                                venue =>
                                <tr key = {venue.id}>
                                    <td> {venue.name }</td>
                                    <td> {venue.address }</td>
                                </tr>

                        )
                    }
                </tbody>
            </table>
            <br></br>

            

        </div></>
    
}

export default VenueComponent;