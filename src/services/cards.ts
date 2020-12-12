import axios from 'axios';
import {BASE_URL} from './common';

export const fetchCards = () => {
  return axios.get(`api/cards`)
}
