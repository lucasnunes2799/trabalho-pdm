import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './src/screens/Login';
import Register from  './src/screens/Register';
import Profile from  './src/screens/Profile';
import { ImageBackground } from 'react-native';



const Stack = createNativeStackNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">

                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Profile" component={Profile}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};
