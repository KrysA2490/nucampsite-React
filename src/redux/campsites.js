import { CAMPSITES } from '../shared/campsites';

export const Campsites = (state = CAMPSITES, action ) => {
    switch(action.type){
        default:
            return state;
    }
}
//All reducers take in 2 parameters: existing state, action