import { ADDITION, SUBTRACTION } from "./actionType";

const initialState = {
    counter: 0

};
export const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDITION:
            return { ...state, counter: state.counter + 5 };

        case SUBTRACTION:
            return { ...state, counter: (state.counter - 5 > 0) ? state.counter - 5 : 0 };


        default:
            return state;
    }

};