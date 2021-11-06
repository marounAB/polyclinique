import { act } from 'react-dom/test-utils';
import { APPOINTMENTS } from '../shared/appointments';
import * as ActionTypes from './actionTypes';

export const Appointments = (state = APPOINTMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_APPOINTMENT:
            var appointment = action.payload;
            appointment.id = state.length;
            appointment.description = "";
            console.log("appointment", appointment);
            return state.concat(appointment);
        case ActionTypes.DELETE_APPOINTMENT:
            return state.filter(app => app.id != action.payload.id);
        case ActionTypes.ADD_DESCRIPTION:
            return state.filter(app => app.id != action.payload.id).concat(action.payload);
        default:
            return state
    }
}