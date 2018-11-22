import { LIBRARY_LIST_BOOKS, LIBRERY_SHOW_SINGLE_BOOK } from '../constant/actionConstant'

const initialState = {
  books: [],
  book: []
}

const libraryReducer = (state = initialState,  action) => {
  switch (action.type) {
    case LIBRARY_LIST_BOOKS:
      //Object.assign({}, state, new state)
      if (action.data.length > 1) {
        return {
          ...state,
          books: action.data
        };
      } else {
        return {
          ...state,
          books: [action.data]
        };
      }


    case LIBRERY_SHOW_SINGLE_BOOK:
      return {
        ...state,
        book: [action.data]
      };

    default:
      return state

  }
}

export default libraryReducer;
