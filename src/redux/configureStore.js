import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Appointments } from './appointments';
import { Doctors } from './doctors';
import { Patients } from './patients';
import { Timeslots } from './timeslots';
import { Availabilities } from './availabilities';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            appointments: Appointments,
            doctors: Doctors,
            patients: Patients,
            timeslots: Timeslots,
            availabilities: Availabilities
            // ...createForms({
            //     feedback: InitialFeedback
            // })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}