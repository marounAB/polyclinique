import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Appointments } from './appointments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            appointments: Appointments 
            // dishes: Dishes,
            // comments: Comments,
            // promotions: Promotions,
            // leaders: Leaders,
            // ...createForms({
            //     feedback: InitialFeedback
            // })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}