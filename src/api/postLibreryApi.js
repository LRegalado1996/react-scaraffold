//dependences
import axios from 'axios';

//constant
import { POSTLIBRERYURL } from '../constant/apiConstant';

const postLibreryApi = (data) => {
  return (
    axios.post(POSTLIBRERYURL, data)
  )
}

export default postLibreryApi;
