import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native'; 




import Contact from './pages/Contact';


const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Scene')}>
        <Text>Go to Scene Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Location')}>
        <Text>Go to Location Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Food')}>
        <Text>Go to Food Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sponsor')}>
        <Text>Go to Sponsor Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const SceneScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Contact/>
    </View>
  );
};

const LocationScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Location Screen</Text>
    </View>
  );
};

const FoodScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Food Screen</Text>
    </View>
  );
};

const SponsorScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sponsor Screen</Text>
    </View>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackMenuRouter;
