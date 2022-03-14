export const FETCH_TASKS = 'FETCH_TASKS';
export const ADD_TASKS = 'ADD_TASKS';
export const ADD_COMPLETED = 'ADD_COMPLETED';
export const DELETE_COMP = 'DELETE_COMP';

export const fetchTasks = () => {
    return {
        type: FETCH_TASKS,
        payload: { id: 2, text: 'fetched task!' }
        // payload: tasksDat
    }
}

export const addTasks = (id, text) => {
    return {
        type: ADD_TASKS,
        payload: { id, text }
    }
}

export const completeTasks = (index) => {
    return {
        type: ADD_COMPLETED,
        payload: { index }
    }
}

export const deleteTask = (index) => {
    return {
        type: DELETE_COMP,
        payload: { index }
    }
}