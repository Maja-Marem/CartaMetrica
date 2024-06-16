// screens/Plotting.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import Cartametrica_Logo from './pictures/Cartametrica_Logo.png'

const blurhash =
'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Plotting = ({ navigation }) => {
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
        <Text>PLOTTED TRAVERSE</Text>
      </View>

      <View style={styles.box3}>

      </View>
        
      <Button
        title="Go to Welcome"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
};

export default Plotting;

const styles = StyleSheet.create({
  box1: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefd7',
  },
  box2: { 
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10, 
    backgroundColor: '#efefd7',
  }
});
