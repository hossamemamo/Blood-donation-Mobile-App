import React from 'react';

//react navi
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../components/styles';
const {primary,tertiary} =Colors;

//screens
import Welcome from './../screens/Welcome';
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Home from './../screens/Home';


const Stack=createNativeStackNavigator();

const RootStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle : {
                    backgroundColor : 'transparent'
                },
                headerTintColor:tertiary,
                headerTransparent:true,
                headerLeftContainerStyle:{
                    paddingLeft:20
                }
            }}
            initialRouteName='Home'
            >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen options={{headerTintColor : primary}} name="Welcome" component={Welcome} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;