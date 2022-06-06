import axios from 'axios'

const BOOKS_REST_API_URL = 'http://localhost:8080/books'

class BookService {
    getBooks(){
        return axios.get(BOOKS_REST_API_URL);
    
    }

    getBookById(bookId){
        return axios.get(BOOKS_REST_API_URL + '/' + bookId)
    }
}

export default new BookService();