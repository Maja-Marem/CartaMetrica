// screens/Main.js
import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Cartametrica_Logo from '../pictures/Cartametrica_Logo.png';

const blurhash =
'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Main = ({ navigation }) => {

  const [isEditing, setIsEditing] = useState(false)
  const [lines, setLines] = useState([]);
  const [distance, setDistance] = useState('');
  const [azimuth, setAzimuth] = useState('');

  const addLine = () => {
    if (distance !== '' && azimuth !== '') {
      const newLines = [...lines, { distance, azimuth }];
      console.log(newLines)
      setLines(newLines);
      setDistance('');
      setAzimuth('');
    }
  };

  const deleteLine = (index) => {
    const newLines = [...lines];
    newLines.splice(index, 1);
    setLines(newLines);
  }

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
        <ScrollView style={{flex:1,  width: '100%'}}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>Input Values</Text>

          <View style={styles.inputContainer}>
            <Text style={{width: '35%', textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>Distance</Text>
            <Text style={{width: '35%', textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>Azimuth</Text>
          </View>

          {lines.length > 0 && (
            <View style={styles.linesContainer}>
              {lines.map((line, index) => (
                <View style={styles.inputContainer} key={index}>
                  <Text style={{width: '35%', textAlign: 'center', fontWeight: 'bold', fontSize: 16, marginBottom: 10}}>{line.distance}</Text>
                  <Text style={{width: '35%', textAlign: 'center', fontWeight: 'bold', fontSize: 16, marginBottom: 10}}>{line.azimuth}</Text>
                  <TouchableOpacity style={{width: '15%'}} onPress={() => { /* Edit Action */ }}>
                    <Ionicons name="pencil" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{width: '15%'}} onPress={() => deleteLine(index)}>
                    <Ionicons name="trash" size={24} color="black" />
                  </TouchableOpacity>
                </View>
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

          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={addLine}>
            <Ionicons name="add-circle-outline" size={18} color="black" />
            <Text style={{fontSize: 16}}>  Add a new line...</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>

      <View style={styles.box3}>
        <Button
          title="PLOT >"
          onPress={() => navigation.navigate('Plotting')}
        />
      </View>

    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  box1: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefd7',
  },
  box2: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#efefd7',
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
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
    width: '35%',
    textAlign: 'center',
  },
});

export default Main;

