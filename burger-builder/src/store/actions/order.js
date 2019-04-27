import * as actionTypes from './actionTypes';
import axios from '../../axios-order';


export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type : actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId : id,
        OrderData : orderData
    }
};

export const purchaseBurgerStart = () => {
    return {
        type : actionTypes.PURCHASE_BURGER_START
    }
};

export const purchaseBurgerFail = (error) => {
    return {
        type : actionTypes.PURCHASE_BURGER_FAIL,
        error : error
    }
};

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart())
        axios.post('/orders.json', orderData)
        .then(response => {
           dispatch(purchaseBurgerSuccess(response.data.name, response.data))
        })
        .catch(err => {
            dispatch(purchaseBurgerFail(err));
        })
    }
};


export const purchaseInit = () => {
    return {
        type : actionTypes.PURCHASE_INIT
    }
};

export const fetchOrderSuccess = (orders) => {
    return {
        type : actionTypes.FETCH_ORDERS_SUCCESS,
        orders : orders
    }
}

export const fetchOrderFail = (error) => {
    return {
        type : actionTypes.FETCH_ORDERS_FAIL,
        error : error
    }
}

export const fetchOrderStart = () => {
    return {
        type : actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrderStart())
        axios.get('/orders.json')
        .then(response => {
            const fetchedData = [];
            for(let key in response.data) {
                fetchedData.push({ 
                    ...response.data[key],
                    id:key
                })
            }
           dispatch(fetchOrderSuccess(fetchedData))
        })
        .catch(err => {
            dispatch(fetchOrderFail(err));
        })
    }
};


