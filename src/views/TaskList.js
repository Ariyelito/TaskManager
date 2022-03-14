import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Button, Pressable, FlatList } from "react-native";


import { useDispatch } from 'react-redux';
import * as tasksAction from "../redux/actions/tasksAction"


export const TaskList = (props) => {

    const dispatch = useDispatch()

    const TaskItem = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <Pressable
                    style={styles.card}
                >
                    <Text style={{ fontSize: 15, color: 'black' }}>
                        {item.text}
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => {
                        !!props.active ?
                            dispatch(tasksAction.completeTasks(index)) :
                            dispatch(tasksAction.deleteTask(index))
                    }
                    }
                    style={!!props.active ? styles.cardAdd : styles.cardDelete}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>x</Text>
                </Pressable>
            </View>
        )
    };

    const AddBtn = () => {
        return (
            <Pressable
                onPress={() => {
                    props.navigation.navigate('Add');
                }}
                style={styles.ajouterBtn}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Ajouter une tâche</Text>
            </Pressable>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <AddBtn />
            <Text style={{ margin: 10 }}>{!props.active ? 'À compléter :' : 'Complétées :'}</Text>
            <FlatList
                contentContainerStyle={{}}
                data={props.tasks}
                renderItem={TaskItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        padding: 10
    },
    list: {
        height: 10,
        padding: 10
    },
    ajouterBtn: {
        height: 40,
        backgroundColor: '#339',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10
    },
    card: {
        height: 40,
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        minWidth: 100,
        flex: 1
    },
    cardDelete: {
        height: 40,
        width: 40,
        backgroundColor: '#CC3300',
        padding: 10,
        marginLeft: 5,
        borderRadius: 5,
    },
    cardAdd: {
        height: 40,
        width: 40,
        backgroundColor: '#339900',
        padding: 10,
        marginLeft: 5,
        borderRadius: 5,
    },
});