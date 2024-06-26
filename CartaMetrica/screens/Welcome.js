// screens/Welcome.js
import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import Cartametrica_Logo from '../pictures/Cartametrica_Logo.png';


const blurhash =
'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Welcome = ({ navigation }) => {
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
        <View style={styles.box21}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 35, marginBottom: 10}}>WELCOME</Text>
          <Text style={{textAlign: 'justify', marginBottom: 10}}>Get ready to revolutionize the way you visualize and analyze traverses! Cartametrica is your ultimate companion in Traverse Plotting, crafted specifically for students and professionals. With Cartametrica, we'll transform complex traverse data into stunning, easy-to-understand visuals with just a few taps.</Text>
          <Text style={{textAlign: 'justify', marginBottom: 10}}>Immerse yourself in the world of geodetic engineering and discover new dimensions of plotting and exploration. Welcome to Cartametrica – where precision meets simplicity.</Text>
        
        </View>


      </View>

      <View style={styles.box3}>
        <Button
          title="START ^^"
          onPress={() => navigation.navigate('Main')}
        />
      </View>

    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  box1: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefd7',
  },
  box2: { 
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10, 
    backgroundColor: '#efefd7',
  },
  box21: {
    flex: 1,
    width: '100%',
    height: '80%',
    backgroundColor: '#e8e3c3',
  },
  box3: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefd7',
  },
  image: {
    height: '100%',
    aspectRatio: 1
  }
  });