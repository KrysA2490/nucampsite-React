import { PROMOTIONS } from '../shared/promotions';

export const Promotions = (state = PROMOTIONS, action ) => {
    switch(action.type){
        default:
            return state;
    }
}
//All reducers take in 2 parameters: existing state, action