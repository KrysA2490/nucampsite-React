import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';

//create a store variable. Pass reducer function and initial state
//createStore function requires reducer as argument - single reducer only!
export const ConfigureStore = () => {
    const store = createStore (
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        }),

        applyMiddleware(thunk, logger)
    );
    return store;
};