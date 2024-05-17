// screens/Main.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Main = () => {
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
      <Text>Welcome to Plotting</Text>
      {lines.length > 0 && (
        <View style={styles.linesContainer}>
          {lines.map((line, index) => (
            <Text key={index}>{`Distance: ${line.distance}, Azimuth: ${line.azimuth}`}</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
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
