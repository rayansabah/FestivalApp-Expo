import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';

export default function VeganIcon({ isVegan }) {
  if (isVegan) {
    return (
      <View>
        <FontAwesome name="leaf" size={13} color="green" />
      </View>
    );
  } else {
    return null;
  }
}
