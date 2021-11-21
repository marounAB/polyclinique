import * as ActionTypes from './actionTypes';


export const Specialities = (state={ errMess: null, specialities:[] }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_SPECIALITIES:
            return {...state, errMess: null, specialities: action.payload};
        default:
            return state
    }
}