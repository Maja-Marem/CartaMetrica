// screens/Plotting.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Plotting = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Plotting Screen</Text>
      <Button
        title="Go to Welcome"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
};

export default Plotting;
