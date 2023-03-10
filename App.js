import React from 'react';
import { StyleSheet, View } from 'react-native';
import StackMenuRouter from './StackMenuRouter';


const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gradient} />
      <StackMenuRouter />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a28877',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#e9424f',
    opacity: 0.5,
  },
});

export default App;
