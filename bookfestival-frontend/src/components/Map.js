// import React, { useEffect, useState } from 'react'
// import './map.css'
// import { Loader } from "@googlemaps/js-api-loader"


// const loader = new Loader({
//     apiKey: "AIzaSyCQInXva025Q49z-kxApKSzhtu_zTjqhvo"
//   });
  
//   loader
//   .load()
//   .then((google) => {
//     const map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: 55.945378, lng: -3.198298 },
//       zoom: 17
//     });
//   })
//   .catch (e => {
//       console.log(e)
//   });

// // Callback
// // loader.loadCallback(e => {
// //     if (e) {
// //       console.log(e);
// //     } else {
// //       new google.maps.Map(document.getElementById("map"), {
// //         center: { lat: 55.945378, lng: -3.198298 },
// //         zoom: 17
// //       });
// //     }
// //   });

// const Map = () => (
//     <div>
//         <h2 className="map-h2">Come Visit Us At Our Campus</h2>
//         <div id="map">
//         </div>
//     </div>
//   )




// export default Map;