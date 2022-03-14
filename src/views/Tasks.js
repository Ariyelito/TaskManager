import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useSelector, useDispatch } from 'react-redux';
import * as tasksAction from "../redux/actions/tasksAction"

import { TaskList } from './TaskList';

const Tab = createBottomTabNavigator();

export const Tasks = ({ navigation }) => {

    //const [tasks, setTasks] = useState([]);
    // const [completed, setCompleted] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tasksAction.fetchTasks())
    }, [dispatch]);

    const tasks = useSelector(state => state.tasks.list)
    console.log("redux tasks :")
    console.log(tasks)
    const completed = useSelector(state => state.tasks.completed)


    useEffect(() => {
        //loadTasks();
    }, []);

    useEffect(() => {
        //saveTasks();
    })

    const saveTasks = async () => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
            await AsyncStorage.setItem('completed', JSON.stringify(completed));
        } catch (e) {
            console.log('2' + e)
        }
    }

    const loadTasks = async () => {
        try {
            const tasksList = await AsyncStorage.getItem('tasks')
            tasksList != null ? setTasks(JSON.parse(tasksList)) : console.log('no tasks found')
            console.log('active notes : ' + tasksList);
            const completeList = await AsyncStorage.getItem('completed')
            completeList != null ? setCompleted(JSON.parse(completeList)) : console.log('no completed found')
            console.log('completed notes : ' + completeList);
        } catch (error) {
            console.log('1' + error)
        }
    }

    const completeTask = (index) => {
        let array = tasks.slice();
        let comp;
        index != -1 ? comp = array.splice(index, 1) : console.log('no tasks found to complete')
        setTasks(array);
        setCompleted(completed.concat(comp))
    }

    const deleteTask = (index) => {
        let array = completed.slice();
        // let comp;
        index != -1 ? array.splice(index, 1) : console.log('no tasks found to delete')
        setCompleted(array);

    }

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Active"
                children={() => <TaskList
                    navigation={navigation}
                    tasks={tasks}
                    setTasks={() => { }}
                    removeTask={completeTask} />}

                options={{ title: 'Tâches actives', headerShown: false, tabBarBadge: tasks.length != 0 ? tasks.length : null }}
            />
            <Tab.Screen
                name="Completed"
                children={() => <TaskList
                    navigation={navigation}
                    tasks={completed}
                    active={tasks}
                    setTasks={() => { }}
                    removeTask={deleteTask} />}
                options={{ title: 'Tâches complétées', headerShown: false, tabBarBadge: completed.length != 0 ? completed.length : null }}
            />
        </Tab.Navigator>
    );
};