import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type:actionTypes.INCREMENT,
    }
};
export const decrement = () => {
    return {
        type:actionTypes.DECREMENT,
    }
};
export const add = (num) => {
    return {
        type:actionTypes.ADD,
        value : num
    }
};
export const substruct = (num) => {
    return {
        type:actionTypes.SUBSTRUCT,
        value : num
    }
};