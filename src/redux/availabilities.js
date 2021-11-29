import * as ActionTypes from './actionTypes';

export const Availabilities = (state={ errMess: null, availabilities:[] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_AVAILABILITIES:
            return {...state, errMess: null, availabilities: action.payload};
        case ActionTypes.ADD_AVAILABILITY:
            var newAvailability = action.payload;
            return { ...state, availabilities: state.availabilities.concat(newAvailability)};
        case ActionTypes.DELETE_AVAILABILITY:
            return { ...state, availabilities: state.availabilities.filter(av => av._id != action.payload)};
        default:
            return state;
    }
}