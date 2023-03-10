import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';



import Contact from './pages/Contact';
import Sponsor from './pages/Sponsor';
import Scene from './pages/Scene';
import Food from './pages/Food';
import Location from './pages/Location';
import SvgComponent from "./assets/svgComp/LogoSvg.js";


const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    'MontserratBold': require('./assets/font/Montserrat-SemiBold.ttf')

  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <LinearGradient
      colors={['#a28877', '#e9424f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >

      <SvgComponent />

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Scene')}>
          <Text style={[styles.link, { fontFamily: 'MontserratBold', paddingVertical: 5 }]}>Scener</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Location')}>
          <Text style={[styles.link, { fontFamily: 'MontserratBold', paddingVertical: 10 }]}>Område</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Food')}>
          <Text style={[styles.link, { fontFamily: 'MontserratBold', paddingVertical: 10 }]}>Mat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sponsor')}>
          <Text style={[styles.link, { fontFamily: 'MontserratBold', paddingVertical: 10 }]}>Sponsorer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
          <Text style={[styles.link, { fontFamily: 'MontserratBold', paddingVertical: 10 }]}>Kontakta oss</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/herrljungakommun/')}>
          <Text style={[styles.link, { fontFamily: 'MontserratBold', paddingVertical: 10 }]}>#välkommenhit</Text>
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
        <Scene />
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
        <Location />
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
        <Food />
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

        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Scene" component={SceneScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Location" component={LocationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Food" component={FoodScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Sponsor" component={SponsorScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Contact" component={ConatctScreen} options={{ headerShown: false }} />
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
    fontSize: 30,
    color: '#fff',
    marginBottom: 10,

  },
});

export default StackMenuRouter;
