import initialState from '../../store/initialState';
import * as types from '../../actions/actionTypes';

export default function eventInputDataReducer(state = initialState.eventInputData, action: any) {
    let newState;
    switch (action.type) {
        case types.ADD_EVENT_INPUT_DATA:
            newState = [...state].concat(action.eventInputData);
            console.log('ADD_EVENT_INPUT_DATA', newState);
            return newState;
        default:
            return state;
    }
}