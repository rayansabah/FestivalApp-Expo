import React from 'react';
import { View, Text } from 'react-native';

import data from '../jsonTemp/food.json';

const App = () => {
  return (
    <View>
      {data.FoodMenu.map((item, index) => (
        <View key={index}>
          <Text>{item.name}</Text>
          <Text>{item.menu.join(', ')}</Text>
        </View>
      ))}
    </View>
  );
};

export default App;
