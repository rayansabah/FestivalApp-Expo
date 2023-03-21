import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Modal, StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';

const API_KEY = '60da068eca94149c33c2176879e11790';
const CITY_NAME = 'Herrljunga';

const WeatherPopup = () => {

  const [temperature, setTemperature] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState('bright-cloud');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`
      );
      const temperature = response.data.main.temp;
      setTemperature(Math.round(temperature));
      setWeatherCondition(celsiusTemp < 0 ? 'dark-cloud' : 'bright-cloud');
    };
    fetchData();
  }, []);


  const getTemperature = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`
      );
      const temperature = response.data.main.temp;
      return Math.round(temperature);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View >
      <View style={styles.container}>
        <FontAwesome5
          name={weatherCondition === 'bright-cloud' ? 'cloud-sun' : 'cloud'}
          size={24}
          color="white"
        />
        <Text style={styles.temperature}>{temperature} °C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  temperature: {

    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WeatherPopup;
