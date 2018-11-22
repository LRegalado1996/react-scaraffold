//constant
import { LIBRARY_LIST_BOOKS, LIBRERY_SHOW_SINGLE_BOOK } from '../constant/actionConstant'

//API
import LibreryApi from '../api/api'

export const loadBooks = () => {
  return (dispatch) => {
      LibreryApi.getAllBooks()
                  .then(([response, json]) => {
                    dispatch(seeBooks(json))
                  })
                  .catch((err) => console.log(err))
  }
} //end loadBooks

export const seeBooks = (data) => {
  return {
    type: LIBRARY_LIST_BOOKS,
    data
  }
}

export const loadSingleBook = (query = ' ') => {
  return (dispatch) => {
    LibreryApi.getSingleBook(query)
                .then(([response, json]) => {
                  dispatch(seeBook(json))
                })
                .catch((err) => console.log(err))
  }
}

export const seeBook = (data) => {
  return {
    type: LIBRERY_SHOW_SINGLE_BOOK,
    data
  }
}
