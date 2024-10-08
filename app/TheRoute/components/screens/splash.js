import React { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Context } from "../globalContext/globalContext.js"
import containers from "../styles/containers.js"
import fonts from "../styles/fonts.js"


function Splash(navigation, route, props) {
    const globalContext = useContext(Context)
    const { isLoggedIn, appSettings } = globalContext;

    return(
        <View style={containers(appSettings).outerPage}>
            <Text style={fonts(appSettings).h1}>Welcome to TheRoute!</Text>
            <Text style={fonts(appSettings).p}>You are {(isLoggedIn)? '' : "Not"}logged in</Text>
            /*
            //button to go to login page
            <TouchableOpacity style={buttons(appSettings).login} onPress={() => navigation.navigate("Login")}>
                <Text>Login</Text>
            </TouchableOpacity>
            */
            //button to go to sign up page
            /*
            <TouchableOpacity style={buttons(appSettings).signUp} onPress={() => navigation.navigate("SignUp"
                <Text>Sign up</Text>
            </TouchableOpacity>
            */
        </View>
    )

}

export default Splash;