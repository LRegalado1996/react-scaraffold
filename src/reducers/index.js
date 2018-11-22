import { combineReducers } from 'redux';

import libreryReducer from './libreryReducer';
import postLibreryReducer from './libreryPostReducer';

export default combineReducers({
  librery: libreryReducer,
  postLibrery: postLibreryReducer
});
