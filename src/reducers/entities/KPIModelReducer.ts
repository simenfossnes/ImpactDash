import initialState from '../../store/initialState';
import * as types from '../../actions/actionTypes';

export default function KPIModelReducer(state = initialState.KPIModels, action: any) {
    let newState;
    switch (action.type) {
        case types.ADD_KPI_MODEL:
            newState = [...state].concat(action.KPIModel);
            console.log('ADD_KPI_MODEL', newState);
            return newState;
        default:
            return state;
    }
}