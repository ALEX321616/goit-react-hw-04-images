import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '24727962-734988bb0b03b5b4e85a70964';

const paramAPI = {
  per_page: 12,
  image_type: 'photo',
  orientation: 'horizontal',
};

const searchApi = Object.entries(paramAPI).join('&').replace(/,/g, '=');
const fullPath = `${BASE_URL}?key=${KEY}&${searchApi}`;

const ApiService = (name, page) => {
  return axios
    .get(`${fullPath}&page=${page}&q=${name}`)
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      return error;
    });
};

export default ApiService;
