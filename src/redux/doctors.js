import * as ActionTypes from './actionTypes';

export const Doctors = (state={ errMess: null, doctors:[] }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DOCTORS:
            return {...state, errMess: null, doctors: action.payload};
        default:
            return state
    }
}