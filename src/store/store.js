import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { authReducer } from '../components/reducer/authReducer';
import { notesReducer } from '../components/reducer/notesReducer';
import { uiReducer } from '../components/reducer/uiReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer,
})


//export const store = configureStore(reducers);
 export const store = createStore(
    
    reducers,
    composeEnhancers(
    applyMiddleware(thunk)
    )
);
