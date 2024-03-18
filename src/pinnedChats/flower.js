import React from 'react';
import { View, StyleSheet } from 'react-native';

const Octagon = ({ size, color }) => {
  return (
    <View style={[styles.container, { width: size, height: size, marginRight:10 }]}>
      <View style={[styles.square, { backgroundColor: color }]} />
      <View style={[styles.square, styles.rotatedSquare, { backgroundColor: color }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  square: {
    position: 'absolute',
    width: 130, 
    height: 130,
    borderRadius:40,
  },
  rotatedSquare: {
    transform: [{ rotate: '45deg' }],
  },
});

export default Octagon;
