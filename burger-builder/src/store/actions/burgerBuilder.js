import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const addIngredient = igName => {
    return {
        type : actionTypes.ADD_INGREDIENT,
        ingredientName : igName
    }
};

export const removeIngredient = igName => {
    return {
        type : actionTypes.REMOVE_INGREDIENT,
        ingredientName : igName
    }
};

// init burger from firebase
export const fetchIngredientsFailed = () => {
    return {
        type : actionTypes.FETCH_INGREDIENTS_FAILED
    }
};

export const setIngredients = (ingredients) => {
    return {
        type : actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
};

export const initIngredients = () => {
   return dispatch => {
        axios.get('ingredients.json')
        .then(response => {
            dispatch(setIngredients(response.data));
        })
        .catch(err => {
            dispatch(fetchIngredientsFailed())
        })
   }
};
// init burger from firebase ends
