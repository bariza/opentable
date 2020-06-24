import axios from 'axios';

// add any base config for api calls
const instance = axios.create({
    baseURL: 'https://opentable.herokuapp.com/api/'
});

export default instance;