import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Appointments } from './appointments';
import { Doctors } from './doctors';
import { Patients } from './patients';
import { Timeslots } from './timeslots';

import auth from "./auth";
import message from "./message";

import { Availabilities } from './availabilities';


const InitialUserForm={
    firstname: '',
    lastname: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    address: '',
    profession: '',
    activities: '',
    description :'',
 
    insurance :''

}

/*const InitialDoctorForm={
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    speciality: "",
    price: 0
}*/

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            appointments: Appointments,
            doctors: Doctors,
            patients: Patients,
            timeslots: Timeslots,

            auth: auth,
            message: message,
            

            availabilities: Availabilities,
            ...createForms({
             user: InitialUserForm,
           //  doctor: InitialDoctorForm

                 })
            
          

            // ...createForms({
            //     feedback: InitialFeedback
            // })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}