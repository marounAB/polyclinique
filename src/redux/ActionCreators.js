import * as ActionTypes from './actionTypes';
import { CLEAR_MESSAGE } from "./actionTypes";
import {
    
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_MESSAGE,
  } from "./actionTypes";
  import AuthService from "../services/auth.service";

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
  
    

  
