export const FETCH_TASKS = 'FETCH_TASKS';
//export const FETCH_COMP = 'FETCH_COMP';

export const fetchTasks = () => {
    return {
            type: FETCH_TASKS,
            payload: { id: 1, text: 'First task!' }
            // payload: tasksDat
    }
}