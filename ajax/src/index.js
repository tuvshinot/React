import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = 'AUth TOKEN';

axios.interceptors.request.use(request => {
    // editing request
    return request;
  }, error => {
      console.log(error);
      return Promise.reject(error);
  });
  
  axios.interceptors.response.use(response => {
    // editing response
    return response;
  }, error => {
      console.log(error);
      return Promise.reject(error);
  });

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
