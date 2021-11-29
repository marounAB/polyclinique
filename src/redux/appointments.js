import { act } from 'react-dom/test-utils';
import * as ActionTypes from './actionTypes';

export const Appointments = (state = { errMess: null, appointments:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_APPOINTMENTS:
            return {...state, errMess: null, appointments: action.payload};
        case ActionTypes.ADD_APPOINTMENT:
            var appointment = action.payload;
            return { ...state, appointments: state.appointments.concat(appointment)};
        case ActionTypes.DELETE_APPOINTMENT:
            return { ...state, appointments: state.appointments.filter(app => app._id != action.payload)};
        case ActionTypes.ADD_DESCRIPTION:
            return { ...state, appointments: state.appointments.filter(app => app._id != action.payload._id).concat(action.payload)};
        default:
            return state
    }
}