import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './screens/Welcome';
import Main from './screens/Main';
import Plotting from './screens/Plotting';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Plotting" component={Plotting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;


export default  function App(){

  // Imports "Relevant functions outside python"
 const { abs, floor, cos, sin, atan, sqrt, pow } = Math
 const radians = Math.PI/180
 const degrees = 180/Math.PI

//  Functions for calculating latitude and departure
function getLatitude (distance, azimuth_N) {
   /*
    Calculates the Latitude of the line using the set parameters

    The product of negative distance and cos azimuth from the
    south in radians

    Parameters: distance, azimuth
    */
    let latitude = (distance*cos(radians*azimuth_N))
    return latitude
}

function getDeparture (distance, azimuth_N) {
    /*
    Calculates the Departure of the line using the set parameters

    The product of negative distance and sin azimuth from the
    south in radians

    Parameters: distance, azimuth
     */
     let departure = (distance*sin(radians*azimuth_N))
     return departure
}

function getNorthing (N_Prev, latitude){
    /*
    calculates the Northing of the line using the calculated
    parameters N_Preve and Latitude
    */
    let northing = N_Prev + latitude
    return northing
}

function getEasting (E_Prev, departure){
    /*
    calculates the Northing of the line using the calculated
    parameters N_Preve and Latitude
    */
    let easting = E_Prev + departure
    return easting
}

function getLEC (Sum_Lat, Sum_Dep) {
    /*
    calculate the LEC using Sum_Lat and Sum_Dep
    */
    let LEC = sqrt((pow(Sum_Lat, 2)) + (pow(Sum_Dep,2)))
    return LEC
}

function getBoSE (Sum_Lat, Sum_Dep){
    /*
    Calculating BoSE using Sum_Lat and Sum_Dep
    */
    if (Sum_Lat < 0 && Sum_Dep < 0){
        let BoSE_mag = atan(Sum_Dep/Sum_Lat)*degrees
        let BoSE_degs = parseInt(BoSE_mag)
        let BoSE_mins = parseInt((BoSE_mag - BoSE_degs)*60)
        let BoSE_secs = ((((BoSE_mag - BoSE_degs)*60)- BoSE_mins)*60).toFixed(2)
        let BoSE_dms = BoSE_degs + "-" + BoSE_mins + "-" + BoSE_secs
        let BoSE = "N" + BoSE_dms + "E"
        return BoSE
    }
    else if (Sum_Lat < 0 && Sum_Dep > 0){
        let BoSE_mag = atan(Sum_Dep/Sum_Lat)*degrees
        let BoSE_degs = parseInt(BoSE_mag)
        let BoSE_mins = parseInt((BoSE_mag - BoSE_degs)*60)
        let BoSE_secs = ((((BoSE_mag - BoSE_degs)*60)- BoSE_mins)*60).toFixed(2)
        let BoSE_dms = BoSE_degs + "-" + BoSE_mins + "-" + BoSE_secs
        let BoSE = "N" + BoSE_dms + "W"
        return BoSE
    }
    else if (Sum_Lat > 0 && Sum_Dep > 0){
        let BoSE_mag = atan(Sum_Dep/Sum_Lat)*degrees
        let BoSE_degs = parseInt(BoSE_mag)
        let BoSE_mins = parseInt((BoSE_mag - BoSE_degs)*60)
        let BoSE_secs = ((((BoSE_mag - BoSE_degs)*60)- BoSE_mins)*60).toFixed(2)
        let BoSE_dms = BoSE_degs + "-" + BoSE_mins + "-" + BoSE_secs
        let BoSE = "S" + BoSE_dms + "W"
        return BoSE
    }
    else if (Sum_Lat > 0 && Sum_Dep < 0){
        let BoSE_mag = atan(Sum_Dep/Sum_Lat)*degrees
        let BoSE_degs = parseInt(BoSE_mag)
        let BoSE_mins = parseInt((BoSE_mag - BoSE_degs)*60)
        let BoSE_secs = ((((BoSE_mag - BoSE_degs)*60)- BoSE_mins)*60).toFixed(2)
        let BoSE_dms = BoSE_degs + "-" + BoSE_mins + "-" + BoSE_secs
        let BoSE = "S" + BoSE_dms + "E"
        return BoSE
    }
    else if (Sum_Lat == 0 && Sum_Dep < 0){
        let BoSE = "Due East"
        return BoSE
    }
    else if (Sum_Lat == 0 && Sum_Dep > 0){
        let BoSE = "Due West"
        return BoSE
    }
    else if (Sum_Dep == 0 && Sum_Lat < 0){
        let BoSE = "Due North"
        return BoSE
    }
    else if (Sum_Dep == 0 && Sum_Lat > 0){
        let BoSE = "Due South"
        return BoSE
    }
    else {
        let BoSE = "EWAN"
        return BoSE
    }
}

}

>>>>>>> 7f5f1fd4973f010d286c3dd61cd62cf03433da30
