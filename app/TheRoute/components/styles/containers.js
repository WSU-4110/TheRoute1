import React, { useContext } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
/*import { Context } from "../globalContext/globalContext.js"

const globalContext = useContext(Context)
const { appSettings } = globalContext;
*/
const containers = (appSettings) => StyleSheet.create({
    outerPage: {
        backgroundColor: ('backgroundColor' in appSettings)? appSettings['backgroundColor'] : "#ffffff",
        color: ('foregroundColor' in appSettings)? appSettings['foregroundColor'] : "#000000",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        alignItems: "center",
        justifyContent: "center"
        padding: 0,
        margin: 0
    }
    loginForm: {
        width: "60%"
        height: "60%",
        backgroundColor: "#c5def2"
        margin: 0,
        borderRadius: 15,
        padding: "6%"
    }

});

export default containers;