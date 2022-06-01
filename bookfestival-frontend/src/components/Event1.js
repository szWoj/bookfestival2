import { render } from '@testing-library/react';
import React, {useEffect, useState} from "react"
import { useParams } from 'react-router-dom';


const Event = () => {

    const {id} = useParams();
    const[message, setMessage] = useState([id])

    
    return (
    <>
        <h1>Hi - {message} </h1>
    </>
)
    
}

export default Event;