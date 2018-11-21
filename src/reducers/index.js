import { combineReducers } from 'redux';

import incrementReducer from './incrementReducer';
import libreryReducer from './libreryReducer';

export default combineReducers({
  counter: incrementReducer,
  librery: libreryReducer
});
