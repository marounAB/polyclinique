import * as ActionTypes from './actionTypes';


export const Timeslots = (state={ errMess: null, timeslots:[] }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_TIMESLOTS:
            return {...state, errMess: null, timeslots: action.payload};
        default:
            return state
    }
}