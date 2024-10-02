import React, { Component, useEffect, Platform } from "react";
import { StyleSheet, View} from "react-native";
import Mapbox, {MapView} from "@rnmapbox/maps";
import Config from "react-native-config";

//Sets access key from environment
Mapbox.setAccessToken(process.env.REACT_APP_MAPBOX_ACCESS_TOKEN);
const App = () => {

    useEffect(() => {
        requestLocationPermission();

      }, []);

      //requests, then grabs user location
      const requestLocationPermission = async () => {
        try {
          if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                title: "Location Permission",
                message: "This app requires access to your location.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log("You can use the location");
            } else {
              console.log("Location permission denied");
            }
          }
        } catch (err) {
          console.warn(err);
        }
      };

  return (
         <View style={styles.page}>
           <View style={styles.container}>
             <MapView
                 style={styles.map}
                 styleURL="mapbox://styles/mapbox/outdoors-v12"

             />
           </View>
         </View>
       );
};

export default App;

const styles = StyleSheet.create({
  matchParent: { flex: 1 },

  page: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',
  },

  container: {
    height: "100%",

    width: "100%",
  },

  map: {
    flex: 1,
  },
});





