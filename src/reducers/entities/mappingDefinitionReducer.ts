import initialState from '../../store/initialState';
import * as types from '../../actions/actionTypes';

export default function mappingDefinitionReducer(state = initialState.mappingDefinitions, action: any) {
    let newState;
    switch (action.type) {
        case types.ADD_MAPPING_DEFINITION:
            newState = [...state].concat(action.mappingDefinition);
            console.log('ADD_MAPPING_DEFINITION', newState);
            return newState;
        default:
            return state;
    }
}