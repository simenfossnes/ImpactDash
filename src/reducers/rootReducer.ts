import {combineReducers} from 'redux';
import eventInputData from './entities/eventInputDataReducer';
import KPIModels from './entities/KPIModelReducer';
import mappingDefinitions from './entities/mappingDefinitionReducer'

const rootReducer = combineReducers({
    eventInputData,
    KPIModels,
    mappingDefinitions
});

export default rootReducer;