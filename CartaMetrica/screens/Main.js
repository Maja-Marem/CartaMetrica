// screens/Main.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Main = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main Screen</Text>
      <Button
        title="Go to Plotting"
        onPress={() => navigation.navigate('Plotting')}
      />
    </View>
  );
};

export default Main;
