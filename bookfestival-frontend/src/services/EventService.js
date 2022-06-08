import axios from 'axios'

const EVENTS_REST_API_URL = 'http://localhost:8080/events'
const EVENTS_REST_API_FREE_EVENTS = 'http://localhost:8080/events?number=0'
const EVENTS_REST_API_ABOVE_10 = 'http://localhost:8080/eventss?number=10'
const EVENTS_REST_API_BETWEEN_0_AND_10 = 'http://localhost:8080/eventsBetween?number1=1&number2=10'

class EventService {
    getEvents(){
        return axios.get(EVENTS_REST_API_URL);
    
    }

    getFreeEvents(){
        return axios.get(EVENTS_REST_API_FREE_EVENTS)
    }

    getEvensAbove10(){
        return axios.get(EVENTS_REST_API_ABOVE_10)
    }

    getEvensBetween0And10(){
        return axios.get(EVENTS_REST_API_BETWEEN_0_AND_10)
    }
}

export default new EventService();