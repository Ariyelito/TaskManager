import { ADD_TASKS, FETCH_TASKS, ADD_COMPLETED, DELETE_COMP } from "../actions/tasksAction";

const initialState = {
    list: [{ id: 1, text: "initial task" }],
    completed: [{ id: 12, text: "initial completed task" }]
}

export default function (state = initialState, action) {
    let index;
    let array;
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
            index = action.payload
            array = state.list.slice()
            let comp = array.splice(index, 1)
            return {
                ...state,
                completed: state.completed.concat(comp),
                list: array
            }
        case DELETE_COMP:
            index = action.payload
            array = state.completed.slice()
            array.splice(index,1)
            return {
                ...state,
                completed: array
            }
    }
    return state;
}