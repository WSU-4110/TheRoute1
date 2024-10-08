import React, {useContext} from "react";
import { createStackNavigator } from '@react';
import { View } from 'react-native';
import { Context } from "../globalContext/globalContext.js"
import Splash from '../screens/splash.js'
import Home from '../screens/home.js'
import Login from '../screens/login.js'
import SignUp from '../screens/signUp.js'



const Stack = createStackNavigator();

function Navigator(props) {

    const globalContext = useContext(Context)
    const { isLoggedIn, appSettings } = globalContext;

    return(
        <Stack.Navigator initialRouteName="Home">
        {(!isLoggedIn)? //If the user is not logged in they can access the pages below
            <>
            <Stack.Screen name="Login" component={Login} options={{ headerShown:false }} //creating screens and pages
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown:false }} //creating screens and pages
            <Stack.Screen name="Home" component={Home} options={{ headerShown:false }} //creating screens and pages
            </>
            :
        }
            /*
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown:false }} //creating screens and pages
            <Stack.Screen name="Login" component={Login} options={{ headerShown:false }} //creating screens and pages
            <Stack.Screen name="Home" component={Home} options={{ headerShown:false }} //creating screens and pages
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown:false }} //creating screens and pages
            */
        </Stack.Navigator>
    )

}

export default Navigator;