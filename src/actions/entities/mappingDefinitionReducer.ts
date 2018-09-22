import * as types from '../actionTypes';

export const addMappingDefinition = (mappingDefinition: any) => ({
    type: types.ADD_MAPPING_DEFINITION,
    mappingDefinition
});