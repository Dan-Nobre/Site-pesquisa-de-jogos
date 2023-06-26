import axios from 'axios';

const infoFetch = axios.create({
  baseURL: "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/",
  headers: {
    'dev-email-address': 'danielaraujonobre10@gmail.com',
    'Content-Type': 'application/json',
  }
})

export default infoFetch;
