import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TaskList } from './TaskList';

import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const Tab = createBottomTabNavigator();

export const Tasks = ({ navigation }) => {

    const [tasks, setTasks] = useState([]);

    const [completed, setCompleted] = useState([]);

    // let nbTasks = tasks.length;

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
// todo
    const completeTask = (index) => {
        let array = tasks.slice();
        let comp;
        index != -1 ? comp = array.splice(index, 1) : console.log('no tasks found to complete')
        setTasks(array);
        setCompleted(completed.concat(comp))
    }

    const deleteTask = (index) => {
        let array = completed.slice();
        let comp;
        index != -1 ? comp = array.splice(index, 1) : console.log('no tasks found to delete')
        setCompleted(array);
    }


    useEffect(() => {
        loadTasks();
    }, []);

    useEffect(() => {
        saveTasks();
    })

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Active"
                children={() => <TaskList
                    navigation={navigation}
                    tasks={tasks}
                    setTasks={setTasks}
                    removeTask={completeTask} />}

                options={{ title:'Tâches actives', headerShown: false, tabBarBadge: tasks.length != 0 ? tasks.length : null }}
            />
            <Tab.Screen
                name="Completed"
                children={() => <TaskList
                    navigation={navigation}
                    tasks={completed}
                    active={tasks}
                    setTasks={setTasks}
                    removeTask={deleteTask} />}
                options={{ title:'Tâches complétées',headerShown: false, tabBarBadge: completed.length != 0 ? completed.length : null }}
            />
        </Tab.Navigator>
        // <TaskList
        // navigation={navigation}
        // tasks={tasks}
        // setTasks={setTasks}
        // removeTask={completeTask}>
        // </TaskList>
    );
};

const styles = StyleSheet.create({




});

 // const NoteItem = ({ item, index }) => {
    //     return (
    //         <>
    //             <Pressable
    //                 style={styles.card}
    //             // onPress={() => {
    //             //     navigation.navigate('Item', { title: item.title, index: index, id: item.id })
    //             // }}
    //             >

    //                 <Text style={{ fontSize: 15, color: 'black' }}>
    //                     {item.text}
    //                 </Text>
    //             </Pressable>
    //             <Button onPress={() => removeTask(index)} title='Terminer' style={styles.checkBox}></Button>
    //         </>
    //     )
    // };


    // const addNote = (note) => {
    //     setTasks(tasks.concat(note))

    // }