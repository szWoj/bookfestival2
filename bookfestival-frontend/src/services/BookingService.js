import axios from 'axios'

const BOOKINGS_REST_API_URL = 'http://localhost:8080/bookings'

class BookingService {
    getBookings(){
        return axios.get(BOOKINGS_REST_API_URL);
    
    }

}

export default new BookingService();