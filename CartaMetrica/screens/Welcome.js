// screens/Welcome.js
import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text, Button } from 'react-native';
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
          contentFit="cover"
          transition={1000}
        />
      </View>

      <View style={styles.box2}>
        <View style={styles.box21}>
          <Text>WELCOME</Text>
        </View>


      </View>
      
      <View style={styles.box3}>
        {/* <Text>Welcome Screen</Text> */}
        <Button
          title="Go to Main"
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
  }
  });