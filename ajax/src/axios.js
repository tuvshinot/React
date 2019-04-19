import axios from 'axios';

const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
});

instance.defaults.headers.common['Authorization'] = 'AUth TOKEN from instances';

export default instance;
