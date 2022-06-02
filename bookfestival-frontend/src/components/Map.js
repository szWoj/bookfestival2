import React, { useEffect, useState } from 'react'
import './map.css'
import { Loader } from "@googlemaps/js-api-loader"


// const Map = () => {

// const [content, setContent] = useState([]);

// const [position, setPosition] = useState({lat:55.945378, lng: -3.198298});

// const firstLoad = () => {
const loader = new Loader({
    apiKey: "AIzaSyCQInXva025Q49z-kxApKSzhtu_zTjqhvo"
  });
  
  loader
  .load()
  .then((google) => {
    const map = new google.maps.Map(document.getElementById("map"), {
    // this.state = new google.maps.Map(document.getElementById("map"), {
        // position,
        // center: {lat: venues.latitude, lng: venues.longitude},
    //   center: { lat: 55.945378, lng: -3.198298 },
      zoom: 17
    });
  })
  .catch (e => {
      console.log(e)
  });
// }

// useEffect(() => {
//     firstLoad()
// }, [])


// Callback
// loader.loadCallback(e => {
//     if (e) {
//       console.log(e);
//     } else {
//       new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 55.945378, lng: -3.198298 },
//         zoom: 17
//       });
//     }
//   });

const Map = () => (
// return
//   (
    <div>
        <h2 className="map-h2">Come Visit Us At Our Campus</h2>
        {/* <div id={this.state}> */}
        <div id="map">
        </div>
    </div>
//   )


)

export default Map;