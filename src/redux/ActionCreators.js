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

export const addDescription = (appointment) => ({
    type: ActionTypes.ADD_DESCRIPTION,
    payload: appointment
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
  // .then(response => console.log(response))
  .then(response => dispatch(addDescription(response)))
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
  
export const addAvailability = (availability) => ({
    type: ActionTypes.ADD_AVAILABILITY,
    payload: availability
})

export const postAvailability = (idDoctor, date, startTime, endTime) => (dispatch) => {

  const newAvailability = {
    idDoctor: idDoctor,
    date: date,
    startTime: startTime,
    endTime: endTime
  };

  return fetch(baseUrl + 'availabilities', {
      method: "POST",
      body: JSON.stringify(newAvailability),
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
  .then(response => dispatch(addAvailability(response)))
  .catch(error =>  { console.log('post availability', error.message); alert('Your availability could not be posted\nError: '+error.message); });
};

export const removeAvailability = (id) => (dispatch) => {

  const toDel = id;

  return fetch(baseUrl + 'availabilities/'+id, {
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
  .then(dispatch(deleteAvailability(toDel)))
  .catch(error =>  { console.log('delete availability', error.message); alert('Your availability could not be deleted\nError: '+error.message); });
};

export const deleteAvailability = (id) => ({
    type: ActionTypes.DELETE_AVAILABILITY,
    payload: id
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
  .then(doctors => dispatch(addDoctors(doctors)))
  .catch(error => dispatch(appointmentsFailed(error.message)));
};

export const doctorsFailed = (errmess) => ({
  type: ActionTypes.DOCTORS_FAILED,
  payload: errmess
});

export const addDoctors = (doctors) => ({
  type: ActionTypes.ADD_DOCTORS,
  payload: doctors
});

export const fetchAvailabilities = () => (dispatch) => {    
  return fetch(baseUrl + 'availabilities')
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
  .then(availabilities => dispatch(addAvailabilities(availabilities)))
  .catch(error => dispatch(availabilitiesFailed(error.message)));
};

export const availabilitiesFailed = (errmess) => ({
  type: ActionTypes.AVAILABILITIES_FAILED,
  payload: errmess
});

export const addAvailabilities = (doctors) => ({
  type: ActionTypes.ADD_AVAILABILITIES,
  payload: doctors
});
