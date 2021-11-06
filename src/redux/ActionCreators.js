import * as ActionTypes from './actionTypes';

export const addAppointment = (idPatient, idDoctor, idTimeSlot, date) => ({
    type: ActionTypes.ADD_APPOINTMENT,
    payload: {
        idPatient: idPatient,
        idDoctor: idDoctor,
        idTimeSlot: idTimeSlot,
        date: date
    }
});

export const deleteAppointment = (id) => ({
    type: ActionTypes.DELETE_APPOINTMENT,
    payload: {
        id: id
    }
});