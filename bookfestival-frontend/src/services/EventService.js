import axios from 'axios'

const EVENTS_REST_API_URL = 'http://localhost:8080/events'

class EventService {
    getEvents(){
        return axios.get(EVENTS_REST_API_URL);
    
    }
}

export default new EventService();