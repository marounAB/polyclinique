import { APPOINTMENTS } from '../shared/appointments';
import * as ActionTypes from './actionTypes';

export const Appointments = (state = APPOINTMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_APPOINTMENT:
            var appointment = action.payload;
            appointment.id = state.length;
            console.log("appointment", appointment);
            return state.concat(appointment);
        case ActionTypes.DELETE_APPOINTMENT:
            return state.filter(app => app.id != action.payload.id);
        default:
            return state
    }
}