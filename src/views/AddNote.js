import React, { useState } from 'react';
import { View, TextInput, RoundedButton, StyleSheet, Text, Pressable, YellowBox } from "react-native";
import { LogBox } from 'react-native';

import { useDispatch } from 'react-redux';
import * as tasksAction from "../redux/actions/tasksAction"





export const AddNote = ({ navigation }) => {

    const dispatch = useDispatch();
    // const {addTask, list, active } = route.params;
    const [noteItem, setNoteItem] = useState(null);

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <TextInput
                    placeholder='Entrez votre tâche'
                    maxLength={38}
                    style={styles.title}
                    onChangeText={(value) => {
                        setNoteItem(value)
                    }}
                />
            </View>
            <View style={styles.container2}>
                <Pressable
                    onPress={() => {
                        let tempNote = {
                            id: Date.now(),
                            text: noteItem
                        }
                        dispatch(tasksAction.addTasks(tempNote.id, tempNote.text))
                        navigation.navigate('Active')
                    }}
                    style={styles.addBtn}>
                    <Text style={{ color: 'white', backgroundColor: 'green' }}>Ajouter</Text>
                </Pressable>
            </View>
        </View>
    );


}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        height:'100%',
    },
    container1: {
        backgroundColor: 'lightgrey',
        flexDirection: "row",
        padding: 8
    },
    container2: {
        backgroundColor: 'lightgrey',
        flexDirection: "row",
        padding: 8
    },
    note: {
        backgroundColor: 'lightgrey',
        width: '80%'
    },
    title: {
        backgroundColor: 'white',
        width: '100%',
        color: 'black',
        borderRadius:5,
        height: 45,
    },
    addBtn: {
        height: 45,
        width: '100%',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'green',
    }

});

