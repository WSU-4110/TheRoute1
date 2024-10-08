import React from 'react';
import { Navigation } from '@react-navigation/native';
import { View } from 'react-native';
import Navigator from './components/appNavigation/appNavigator.js'
import { Context, Provider } from "./components/globalContext/globalContext.js";
import containers from "./components/styles/containers.js"

function App(props) {

    return (
    <Provider>
        <View style={{flex:1}}
            <NavigationContainer>
                <Navigator />
            </NavigationContainer>
        </View>
    </Provider>
    )
}
export default App;