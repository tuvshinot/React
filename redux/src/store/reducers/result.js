import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results : []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results:state.results.concat({value: action.result, id:new Date()})
            };
        case actionTypes.DELETE_RESULT:
            const id = action.id;
            const updatedArray = state.results.filter(el => el.id !== id)
            return {
                ...state,
                results:updatedArray
            };
        default:
            return state;
    }
};

export default reducer;

