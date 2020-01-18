import {createStore} from 'redux';
import {Reducer, initialState} from './reducer';

//create a store variable. Pass reducer function and initial state
export const ConfigureStore = () => {
    const store = createStore (
        Reducer,
        initialState
    );
    return store;
};