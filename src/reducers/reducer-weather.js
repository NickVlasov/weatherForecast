import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // ALWAYS RETURN A NEW STATE, DON'T MODIFY EXISTING STATE DIRECTLY
            // return state.concat([ action.payload.data ]); the same as above
            return [action.payload.data, ...state];
    }
    return state;
}