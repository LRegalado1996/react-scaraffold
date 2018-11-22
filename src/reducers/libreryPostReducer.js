import { LIBRERY_POST_BOOK } from '../constant/actionConstant';

const initialState = {
  postBook: []
}

const postLibreryReducer = (state = initialState, action) => {
  console.log('postLibreryReducer');
  switch (action.type) {
    case LIBRERY_POST_BOOK:
      return {
        ...state,
        postBook: [action.data]
      };

    default:
      return state;
  }
}

export default postLibreryReducer;
