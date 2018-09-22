import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';

export default function configureStore() {
    return createStore(
        rootReducer,
        (<any>window).__REDUX_DEVTOOLS_EXTENSION__ && (<any>window).__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware()
    );
}