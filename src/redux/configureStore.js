import { createStore, combineReducers} from 'redux';
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
        })
    );
    return store;
};