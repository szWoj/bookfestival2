import axios from 'axios'

const CUSTOMERS_REST_API_URL = 'http://localhost:8080/customers'

class CustomerService {
    getCustomers(){
        return axios.get(CUSTOMERS_REST_API_URL);
    
    }
}

export default new CustomerService();