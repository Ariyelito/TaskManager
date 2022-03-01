import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Button, Pressable, FlatList } from "react-native";

export const TaskList = (props) => {

    const removeTask = props.removeTask;

    const TaskItem = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', marginBottom:5 }}>
                <Pressable
                    style={styles.card}
                    onPress={() => removeTask(index)}
                >
                    <Text style={{ fontSize: 15, color: 'black' }}>
                        {item.text}
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => removeTask(index)}
                    style={styles.cardDelete}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>x</Text>
                </Pressable>
            </View>
        )
    };

    const AddBtn = () => {
        return (
            <Pressable
                onPress={() => {
                    props.navigation.navigate('Add', {
                        addTask: props.setTasks,
                        list: !props.active ? props.tasks : props.active,
                        active: !props.active ? true : false
                    });
                }}
                style={styles.ajouterBtn}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Ajouter une tâche</Text>
            </Pressable>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* < console.log/> */}
            <AddBtn />
            <Text style={{margin:10}}>{!props.active ? 'À compléter :' : 'Complétées :'}</Text>
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
        backgroundColor: 'green',
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
        backgroundColor: '#ff4040',
        padding: 10,
        marginLeft: 5,
        borderRadius: 5,
    }
});