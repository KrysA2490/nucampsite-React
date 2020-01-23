import { PARTNERS } from '../shared/partners';

export const Partners = (state = PARTNERS, action ) => {
    switch(action.type){
        default:
            return state;
    }
}
//All reducers take in 2 parameters: existing state, action