import { ADD_TASKS, FETCH_TASKS, ADD_COMPLETED } from "../actions/tasksAction";

const initialState = {
    list: [{ id: 1, text: "initial task" }],
    completed: [{ id: 12, text: "initial completed task" }]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TASKS:
            return {
                ...state,
                list: state.list.concat(action.payload)
            }
        case ADD_TASKS:
            return {
                ...state,
                list: state.list.concat(action.payload)
            }
        case ADD_COMPLETED:
            return {
                ...state,
                completed: state.completed.concat(action.payload)
            }
    }
    return state;
}