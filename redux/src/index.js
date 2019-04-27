import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

// redux 
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const logger = store => {
    return next => {
        return action => {
            console.log("[Middleware dispatching]", action);
            const result = next(action);
            console.log("[Middleware next state]", store.getState());
            return result;  
        }
    }
}

// redux dev tool connect with compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// combining reducer
const rootReducer = combineReducers({
    ctr : counterReducer,
    res : resultReducer
})

// pushing middleware to store // thunk is for asyhchronous code
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


