import { FETCH_TASKS } from "../actions/tasksAction";

const initialState = {
    list : [],
    completed : []

}

export default function(state=initialState, action) {
    switch(action.type){
        case FETCH_TASKS:
            return {
                ...state,
                list : action.payload
            }
    }
    return state;
}