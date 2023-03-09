import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Contact from './pages/Contact';
import Sponsor from './pages/Sponsor';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#a28877', '#e9424f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.title}>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Scene')}>
          <Text style={styles.link}>Go to Scene Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Location')}>
          <Text style={styles.link}>Go to Location Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Food')}>
          <Text style={styles.link}>Go to Food Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sponsor')}>
          <Text style={styles.link}>Go to Sponsor Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.link}>Go to Contact Screen</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const SceneScreen = () => {
  return (
    <LinearGradient
      colors={['#a28877', '#e9424f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.container}>
        
      </View>


    </LinearGradient>
  );
};

const LocationScreen = () => {
  return (
    <LinearGradient
      colors={['#a28877', '#e9424f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Location Screen</Text>
      </View>
    </LinearGradient>
  );
};

const FoodScreen = () => {
  return (
    <LinearGradient
      colors={['#a28877', '#e9424f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Food Screen</Text>
      </View>
    </LinearGradient>
  );
};

const SponsorScreen = () => {
  return (
    <LinearGradient
      colors={['#a28877', '#e9424f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.container}>
        <Sponsor />
      </View>
    </LinearGradient>
  );
};

const ConatctScreen = () => {
  return (
    <LinearGradient
      colors={['#a28877', '#e9424f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.container}>
      <Contact />
      </View>
    </LinearGradient>
  );
};

const StackMenuRouter = () => {
  return (
  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scene" component={SceneScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Food" component={FoodScreen} />
        <Stack.Screen name="Sponsor" component={SponsorScreen} />
        <Stack.Screen name="Contact" component={ConatctScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  link: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
});

export default StackMenuRouter;
