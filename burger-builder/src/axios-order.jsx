import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-b5b43.firebaseio.com/',

});

export default instance;