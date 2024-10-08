import React { useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Context } from "../globalContext/globalContext.js"
import containers from "../styles/containers.js"
import fonts from "../styles/fonts.js"
import inputs from "../styles/inputs.js"
import margins from "../styles/margins.js"
import buttons from "../styles/margins.js"




function SignUp(props) {
    const globalContext = useContext(Context)
    const { isLoggedIn, appSettings } = globalContext;

    const [securePassword, setSecurePassword] = useState(true)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function handleLogin() {
        console.log("Signing In")
        console.log(email)
        console.log(password)
        setIsLoggedIn(true)
        // CHANGE THIS TO PAGE USER GOES TO AFTER LOGGING IN navigation.navigate("Home")
        //function to send user data to Django sever and verify
    }

    return(
        <View style={containers(appSettings).outerPage}>
            <View style={containers(appSettings).loginForm}>
            <Text style={[fonts(appSettings).h1, margins.topPage]}>Sign Up</Text>
                <Text style={fonts(appSettings).inputLabel, margins.topPage}>Email Address</Text>
                <TextInput value={email} onChangeText={text => setEmail(text)} textContentType="username" autocompleteType="email" style={inputs(appSettings).textInput} placeholder='Email'/>
                <Text style={[fonts(appSettings).inputLabel, {marginTop: "10%"}]}>Password</Text>
                <TextInput value = {password} onChangeText={text => setPassword(text)} secureTextEntry={securePassword} textContentType="password" autocompleteType="password" style={inputs(appSettings).textInput} placeholder='Password'/>

                <TouchableOpacity style={[buttons(appSettings).login, {marginTop: "25%"} ]} onPress={() => handleLogin()}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>

            </View>
        </View>
    )

}

export default SignUp;