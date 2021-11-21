import * as ActionTypes from './actionTypes';


export const Professions = (state={ errMess: null, professions:[] }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PROFESSIONS:
            return {...state, errMess: null, professions: action.payload};
        default:
            return state
    }
}