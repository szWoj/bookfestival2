import React, {useState, useEffect} from 'react'
import VenueService from '../services/VenueService';

function VenueComponent() {

    const [venues, setVenues] = useState([])

    useEffect(() => {
        getVenues()
    }, [])

    const getVenues = () => {

        VenueService.getVenues().then((response) => {
            setVenues(response.data)
            console.log(response.data);
        });
    };
    return (
        <div className = "container">
            
            <h1 className = "text-center"> Venue </h1>

            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> Venue's name</th>
                        <th> Venue's address</th>
                        <th> Venue's phone number</th>
                        <th> Venue's disabled Access</th>
                        <th> Venue's capacity</th>
                        <th> Venue's latitude</th>
                        <th> Venue's longitude</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        venues.map(
                                venue =>
                                <tr key = {venue.id}>
                                    <td> {venue.name }</td>
                                    <td> {venue.address }</td>
                                    <td> {venue.phoneNumber }</td>    
                                    <td> {venue.disabledAccess }</td>
                                    <td> {venue.capacity }</td>
                                    <td> {venue.latitude }</td>
                                    <td> {venue.longitude }</td>

                                </tr>

                        )
                    }

                </tbody>


            </table>

        </div>
    )
}

export default VenueComponent;