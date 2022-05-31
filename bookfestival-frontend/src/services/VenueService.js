import axios from 'axios'

const VENUES_REST_API_URL = 'http://localhost:8080/venues'

class VenueService {
    getVenues(){
        return axios.get(VENUES_REST_API_URL);
    
    }
}

export default new VenueService();