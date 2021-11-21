
import * as ActionTypes from './actionTypes';


export const Patients = (state={ errMess: null, patients:[] }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PATIENTS:
            return {...state, errMess: null, patients: action.payload};
        default:
            return state
    }
}