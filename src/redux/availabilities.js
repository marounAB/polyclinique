import { AVAILABILITIES } from "../shared/availabilities";
import * as ActionTypes from './actionTypes';

export const Availabilities = (state = AVAILABILITIES, action) => {
    switch (action.type) {
        case ActionTypes.ADD_AVAILABILITY:
            var availabilitie = action.payload;
            availabilitie.id = state.length;
            return state.concat(availabilitie);
        case ActionTypes.DELETE_AVAILABILITY:
            return state.filter(a => a.id != action.payload.id);
        default:
            return state;
    }
}