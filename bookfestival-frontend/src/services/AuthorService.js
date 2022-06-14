import axios from 'axios'

const AUTHORS_REST_API_URL = 'http://localhost:8080/authors'

class AuthorService {
    getAuthors(){
        return axios.get(AUTHORS_REST_API_URL);
    
    }

}

export default new AuthorService();