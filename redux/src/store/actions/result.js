import * as actionTypes from './actionTypes';

////////////////////// asynchronous code for storing result
export const saveResult = (result) => {
    return {
        type:actionTypes.STORE_RESULT,
        result:result
    }
};

export const storeResult = (result) => {
    return (dispatch, getState) => { // dispatch will set by redux thunk which configged in index.js
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            dispatch(saveResult(result))
        }, 2000);
    }
};
///////////////////////
export const deleteResult = (id) => {
    return {
        type:actionTypes.DELETE_RESULT,
        id : id
    }
};