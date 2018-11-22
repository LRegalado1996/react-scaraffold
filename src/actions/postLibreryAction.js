//constant
import { LIBRERY_POST_BOOK } from '../constant/actionConstant'

//API
import postLibreryApi from '../api/postLibreryApi';

export const sendpostBook = (book) => {
  return (dispatch) => {
    postLibreryApi(book)
      .then(res => {
        if (res.status === 201) {
          console.log('send succesfull')
          getResponse(res.data);
        } else {
          console.log(res);
        }
      })
  }
}

export const getResponse = (data) => {
  return {
    type: LIBRERY_POST_BOOK,
    data
  }
}
