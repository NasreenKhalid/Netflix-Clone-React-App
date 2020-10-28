import axios from 'axios';

// Creating the base url here
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance;