import * as types from '../actionTypes';

export const addEventInputDataActions = (inputData: any) => ({
    type: types.ADD_EVENT_INPUT_DATA,
    inputData
});