const axios = require('axios');
const { Movies } = require('./entities/Movies');
const { API_BASE_URL } = require('../../config');

require('dotenv').config();

const getPopular = async (page, language) => {
  const result = await axios.get(
    `${API_BASE_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&page=${page}`
  );
  return new Movies(result.data);
}

const getDetails = (id, language) => {
  return axios.get(
    `${API_BASE_URL}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
  );
}

module.exports = {
  getPopular, 
  getDetails
}