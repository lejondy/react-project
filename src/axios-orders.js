import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-project-57239.firebaseio.com/'
});

export default instance;