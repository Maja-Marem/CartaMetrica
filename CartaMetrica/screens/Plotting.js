// screens/Plotting.js
import React from 'react';
import { Image } from 'expo-image';
import { View, Text, Button, StyleSheet } from 'react-native';
import Cartametrica_Logo from '../pictures/Cartametrica_Logo.png';

const blurhash =
'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Plotting = ({ route, navigation }) => {

  const { LEC, REC, BoSE, Coords } = route.params;
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.box1}> 
        <Image
          style={styles.image}
          source={Cartametrica_Logo}
          placeholder={blurhash}
          resizeMode="contain"
          transition={1000}
        />
      </View>

      <View style={styles.box2}>
        <Text>PLOTTED TRAVERSE</Text>
      </View>

      <View style={styles.box3}>
        <Text style={{textAlign: 'left', marginBottom: 10, color: 'black'}}>       Linear Error of Closure: {LEC} </Text>
        <Text style={{textAlign: 'left', marginBottom: 10, color: 'black'}}>       Relative Error of Closure: {REC} </Text>
        <Text style={{textAlign: 'left', marginBottom: 10, color: 'black'}}>       Bearing of Side Error: {BoSE} </Text>
      </View>

      <View style={styles.box4}>
        <Button
          title ="PLOT AGAIN >"
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    </View>
  );
};

export default Plotting;

const styles = StyleSheet.create({
  box1: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefd7',
  },
  box2: { 
    width: '100%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15, 
    backgroundColor: '#efefd7',
  },
  box3: {
    width: '100%',
    height: '12%',
    alignItems: 'left',
    justifyContent: 'left',
    padding: 15,
    backgroundColor: '#efefd7',
  },
  box4: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefd7',
  },
});