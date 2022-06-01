import React from 'react';
import { Link } from "react-router-dom";

const Home = (event) => {

  return (
    <><h1 className>Hello World</h1>
    <li><Link to="/venues">Venue</Link></li>
    <li><Link to={"/event/1"}>EventPicture1</Link></li>
    <li><Link to={"/event/2"}>EventPicture2</Link></li></>
    
  );
}

export default Home;