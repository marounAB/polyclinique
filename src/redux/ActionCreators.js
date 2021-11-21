import * as ActionTypes from './actionTypes';
import { CLEAR_MESSAGE } from "./actionTypes";
import {
    
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_MESSAGE,
  } from "./actionTypes";
  import AuthService from "../services/auth.service";
import { baseUrl } from '../shared/baseUrl';

export const addAppointment = (appointment) => ({
    type: ActionTypes.ADD_APPOINTMENT,
    payload: appointment
});

export const postAppointment = (idPatient, idDoctor, idTimeSlot, date) => (dispatch) => {

  const newAppointment = {
    idPatient: idPatient,
    idDoctor: idDoctor,
    idTimeSlot: idTimeSlot,
    date: date,
    description: ""
  };

  return fetch(baseUrl + 'appointments', {
      method: "POST",
      body: JSON.stringify(newAppointment),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addAppointment(response)))
  .catch(error =>  { console.log('post appointment', error.message); alert('Your appointment could not be posted\nError: '+error.message); });
};

export const removeAppointment = (id) => (dispatch) => {

  const toDel = id;

  return fetch(baseUrl + 'appointments/'+id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(dispatch(deleteAppointment(toDel)))
  .catch(error =>  { console.log('post appointment', error.message); alert('Your appointment could not be posted\nError: '+error.message); });
};

export const deleteAppointment = (id) => ({
    type: ActionTypes.DELETE_APPOINTMENT,
    payload: id
});

export const addDescription = (id, idPatient, idDoctor, idTimeSlot, date, desc) => ({
    type: ActionTypes.ADD_DESCRIPTION,
    payload: {
        id: id,
        idPatient: idPatient,
        idDoctor: idDoctor,
        idTimeSlot: idTimeSlot,
        date: date,
        description: desc
    }
})

export const putDescription = (id, idPatient, idDoctor, idTimeSlot, date, desc) => (dispatch) => {

  const newDescription = {
    id: id,
    idPatient: idPatient,
    idDoctor: idDoctor,
    idTimeSlot: idTimeSlot,
    date: date,
    description: desc
  }

  return fetch(baseUrl + 'appointments/' + id, {
      method: "PUT",
      body: JSON.stringify(newDescription),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error =>  { console.log('post appointment', error.message); alert('Your appointment could not be posted\nError: '+error.message); });
};

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});


  
export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
    

  

export const addAvailability = (idDoctor, date, startTime, endTime) => ({
    type: ActionTypes.ADD_AVAILABILITY,
    payload: {
        idDoctor: idDoctor,
        date: date,
        startTime: startTime,
        endTime: endTime
    }
})

export const deleteAvailability = (id) => ({
    type: ActionTypes.DELETE_AVAILABILITY,
    payload: {
        id: id
    }
})

export const fetchAppointments = () => (dispatch) => {    
  return fetch(baseUrl + 'appointments')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(comments => dispatch(addAppointments(comments)))
  .catch(error => dispatch(appointmentsFailed(error.message)));
};

export const appointmentsFailed = (errmess) => ({
  type: ActionTypes.APPOINTMENTS_FAILED,
  payload: errmess
});

export const addAppointments = (appointments) => ({
  type: ActionTypes.ADD_APPOINTMENTS,
  payload: appointments
});

export const fetchDoctors = () => (dispatch) => {    
  return fetch(baseUrl + 'doctors')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(doctors => dispatch(addDcotors(doctors)))
  .catch(error => dispatch(doctorsFailed(error.message)));
};

export const doctorsFailed = (errmess) => ({
  type: ActionTypes.DOCTORS_FAILED,
  payload: errmess
});

export const addDcotors = (doctors) => ({
  type: ActionTypes.ADD_DOCTORS,
  payload: doctors
});

export const patientsFailed = (errmess) => ({
  type: ActionTypes.PATIENTS_FAILED,
  payload: errmess
});

export const addPatients = (patients) => ({
  type: ActionTypes.ADD_PATIENTS,
  payload: patients
});

export const fetchPatients = () => (dispatch) => {    
  return fetch(baseUrl + 'patients')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(patients => dispatch(addPatients(patients)))
  .catch(error => dispatch(patientsFailed(error.message)));
};

export const timeslotsFailed = (errmess) => ({
  type: ActionTypes.TIMESLOTS_FAILED,
  payload: errmess
});

export const addTimeslots = (timeslots) => ({
  type: ActionTypes.ADD_TIMESLOTS,
  payload : timeslots
});


export const fetchTimeslots = () => (dispatch) => {    
  return fetch(baseUrl + 'timeslots')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(timeslots => dispatch(addTimeslots(timeslots)))
  .catch(error => dispatch(timeslotsFailed(error.message)));
};


export const specialitiesFailed = (errmess) => ({
  type: ActionTypes.SPECIALITIES_FAILED,
  payload : errmess
});

export const addSpecialities = (specialities) => ({
  type: ActionTypes.ADD_SPECIALITIES,
  payload: specialities
});

export const fetchSpecialities = () => (dispatch) => {    
  return fetch(baseUrl + 'specialities')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(specialities => dispatch(addSpecialities(specialities)))
  .catch(error => dispatch(specialitiesFailed(error.message)));
};

export const professionsFailed = (errmess) => ({
  type: ActionTypes.PROFESSIONS_FAILED,
  payload : errmess
});

export const addProfessions = (professions) => ({
  type : ActionTypes.ADD_PROFESSIONS,
  payload : professions
});


export const fetchProfessions = () => (dispatch) => {    
  return fetch(baseUrl + 'professions')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(professions => dispatch(addProfessions(professions)))
  .catch(error => dispatch(professionsFailed(error.message)));
};






