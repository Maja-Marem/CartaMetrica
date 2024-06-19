import React from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import Cartametrica_Logo from '../pictures/Cartametrica_Logo.png';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Plotting = ({ route, navigation }) => {
  const { LEC, REC, BoSE, Coords } = route.params;

  // Transform Coords into the correct format
  const coordinates = Coords.map(coord => ({ x: coord[1], y: coord[0] }));

  // Calculate viewBox dimensions based on box11 dimensions
  const box11Width = Dimensions.get('window').width * 0.9; // 90% of screen width
  const box11Height = Dimensions.get('window').height * 0.4; // 50% of screen height

  // Calculate scaling factors for fitting the graph into box11
  const maxX = Math.max(...coordinates.map(coord => coord.x));
  const maxY = Math.max(...coordinates.map(coord => coord.y));
  const minX = Math.min(...coordinates.map(coord => coord.x));
  const minY = Math.min(...coordinates.map(coord => coord.y));

  const traverseWidth = maxX - minX;
  const traverseHeight = maxY - minY;

  // Determine scaling factors for fitting the graph into box11
  const scaleX = box11Width / traverseWidth;
  const scaleY = box11Height / traverseHeight;
  const scale = Math.min(scaleX, scaleY) * 0.7; // Apply a slight margin

  // Translate coordinates to fit into box11
  const translatedCoordinates = coordinates.map(coord => ({
    x: (coord.x - minX) * scale + (box11Width - traverseWidth * scale) / 2,
    y: (coord.y - minY) * scale + (box11Height - traverseHeight * scale) / 2,
  }));

  return (
    <View style={{ flex: 1 }}>
      {/* Logo and Header */}
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={Cartametrica_Logo} resizeMode="contain" />
      </View>

      {/* Plotting Area */}
      <View style={styles.box1}>
        <View style={styles.box11}>
          <Svg width={box11Width} height={box11Height}>
            {/* Render circles for each point */}
            {translatedCoordinates.map((coord, index) => (
              <Circle key={index} cx={coord.x} cy={coord.y} r={2} fill="blue" />
            ))}

            {/* Render lines between points */}
            {translatedCoordinates.map((coord, index) => {
              if (index < translatedCoordinates.length - 1) {
                return (
                  <Line
                    key={index}
                    x1={translatedCoordinates[index].x}
                    y1={translatedCoordinates[index].y}
                    x2={translatedCoordinates[index + 1].x}
                    y2={translatedCoordinates[index + 1].y}
                    stroke="black"
                    strokeWidth={1}
                  />
                );
              }
              return null;
            })}

            {/* Render LEC line */}
            {translatedCoordinates.length > 1 && (
              <Line
                x1={translatedCoordinates[0].x}
                y1={translatedCoordinates[0].y}
                x2={translatedCoordinates[translatedCoordinates.length - 1].x}
                y2={translatedCoordinates[translatedCoordinates.length - 1].y}
                stroke="red"
                strokeWidth={2}
              />
            )}
          </Svg>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.box3}>
        <Text style={styles.footerText}>Linear Error of Closure: {LEC}</Text>
        <Text style={styles.footerText}>Relative Error of Closure: {REC}</Text>
        <Text style={styles.footerText}>Bearing of Side Error: {BoSE}</Text>
      </View>

      {/* Button */}
      <View style={styles.box4}>
        <Button title="PLOT AGAIN >" onPress={() => navigation.navigate('Main')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefd7',
  },
  box1: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefd7',
  },
  box11: {
    width: '90%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8e3c3',
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: '#efefd7',
  },
  box4: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefd7',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  footerText: {
    textAlign: 'left',
    marginBottom: 10,
    color: 'black',
  },
});

export default Plotting;
