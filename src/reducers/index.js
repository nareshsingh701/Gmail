import { combineReducers } from "redux";

import { counterRrducer } from './counterReducers';

const rootReducer = combineReducers({
    counter: counterRrducer
})

export default rootReducer;