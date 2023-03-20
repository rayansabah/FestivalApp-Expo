import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Modal, StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const WeatherPopup = () => {
  const [temperature, setTemperature] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState('bright-cloud');

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=58.0774&lon=13.0266&appid=60da068eca94149c33c2176879e11790')
      .then(response => response.json())
      .then(data => {
        const celsiusTemp = data.main.temp - 273.15;
        setTemperature(celsiusTemp.toFixed(1));
        setWeatherCondition(celsiusTemp < 0 ? 'dark-cloud' : 'bright-cloud');
      });
  }, []);

  return (
    <View style={styles.container}>
      <FontAwesome5
        name={weatherCondition === 'bright-cloud' ? 'cloud-sun' : 'cloud'}
        size={24}
        color="white"
      />
      <Text style={styles.temperature}>{temperature} °C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  temperature: {

    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WeatherPopup;
