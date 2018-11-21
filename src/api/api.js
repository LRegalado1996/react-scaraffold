//constant
import { URL, URLL } from '../constant/apiConstant';

class LibreryApi {

  static getAllBooks() {
    return fetch(URL)
                .then(response => Promise.all([response, response.json()]))
  } // end getAllBooks

  static getSingleBook(query) {
    return fetch(URLL + query)
                .then(response => Promise.all([response, response.json()]))
  }

} //end LibreryApi

export default LibreryApi;
