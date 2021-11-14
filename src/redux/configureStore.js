import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Appointments } from './appointments';
import { Doctors } from './doctors';
import { Patients } from './patients';
import { Timeslots } from './timeslots';
import { InitialLogin } from './forms';
import auth from "./auth";
import message from "./message";
import { createForms } from 'react-redux-form';
import { Availabilities } from './availabilities';
import { Specialities } from './specialities';
import { Professions } from './professions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            appointments: Appointments,
            doctors: Doctors,
            patients: Patients,
            timeslots: Timeslots,
            specialities: Specialities,
            professions: Professions,
            auth: auth,
            message: message,
            

            availabilities: Availabilities,

            ...createForms({
                login: InitialLogin
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}