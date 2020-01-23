import { COMMENTS } from '../shared/comments';
//Goal: cause this reducer to update its part of the state when the add comment action is dispatched to the store
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action ) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date= new Date().toISOString();
            //return new state to redux store w/o mutating original array. 
            return state.concat(comment);
        default:
            return state;
    }
};
//All reducers take in 2 parameters: existing state, action

