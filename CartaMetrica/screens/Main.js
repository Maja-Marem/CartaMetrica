// screens/Main.js
import React, { useState } from 'react';
import { Image } from 'expo-image';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Cartametrica_Logo from '../pictures/Cartametrica_Logo.png';

const blurhash =
'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Main = ({navigation}) => {
  const [lines, setLines] = useState([]);
  const [distance, setDistance] = useState('');
  const [azimuth, setAzimuth] = useState('');

  const addLine = () => {
    if (distance !== '' && azimuth !== '') {
      const newLines = [...lines, { distance, azimuth }];
      setLines(newLines);
      setDistance('');
      setAzimuth('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={Cartametrica_Logo}
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
      </View>

      {lines.length > 0 && (
        <View style={styles.linesContainer}>
          {lines.map((line, index) => (
            <Text key={index}>{`Line ${index+1}: ${line.distance}, ${line.azimuth} deg from the SOuth`}</Text>
          ))}
        </View>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Distance"
          keyboardType="numeric"
          value={distance}
          onChangeText={setDistance}
        />
        <TextInput
          style={styles.input}
          placeholder="Azimuth"
          keyboardType="numeric"
          value={azimuth}
          onChangeText={setAzimuth}
        />
      </View>
      <Button title="Add new line?" onPress={addLine} />
      <Button
        title="Go to Plotting"
        onPress={() => navigation.navigate('Plotting')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo:{
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefd7',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  linesContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
    width: 100,
    textAlign: 'center',
  },
});

export default Main;

import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

// Importing functions

