import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import { Tasks } from "./src/views/Tasks";
import { AddNote } from "./src/views/AddNote";
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Tasks}
            options={{ title: 'Vos tâches' }} />
          <Stack.Screen
            name="Add"
            component={AddNote}
            options={{ title: 'Ajouter une tâche' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;