import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import data from '../jsonTemp/scene.json';

import CustomHeader from '../component/CustomHeader';



const scen1 = data.Scenes.find((scene) => scene.name === 'Scen 1');
const scen2 = data.Scenes.find((scene) => scene.name === 'Scen 2');
const scen3 = data.Scenes.find((scene) => scene.name === 'Scen 3');

export default function Scene() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    square: {
      margin: 10,
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#ffffff',
      width: 300,
    },
    sceneHeader: {
      textAlign: 'left',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    textArtist: {
      borderRadius: 15,
      backgroundColor: '#e9e9e9',
      width: 'auto',
      marginBottom: 2,
      marginHorizontal: 5,
      padding: 3,
    },
  });

  /// Favorit funktion start  
  const [favorites, setFavorites] = useState([]);

  const addFavorite = async (artist, time) => {
    const newFavorite = { artist, time };
    const updatedFavorites = [...favorites, newFavorite];
    setFavorites(updatedFavorites);
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const getFavorites = async () => {
      const favoritesString = await AsyncStorage.getItem('favorites');
      if (favoritesString) {
        setFavorites(JSON.parse(favoritesString));
      }
    };
    getFavorites();
  }, []);

  /// Favorit funktion slut

  return (<>
    <View>
        <CustomHeader title="Home" />
      </View>
    <ScrollView showsVerticalScrollIndicator={false}>
     
      <View style={styles.container}>

        <View>
          {data.SceneInfo.map((scene) => (
            <View style={styles.square} key={scene.name}>
              <View className="scene-header-container">
                <View className="header-text-container">
                  <Text style={styles.header}>{scene.name}</Text>
                  
                </View>
                <View className="popuptext-container">

                </View>
              </View>

              <Text>
                {scene.info.map((item, index) => (
                  <Text key={index}>{item}</Text>
                ))}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.square}>
          <Text>Favoriter:</Text>
          {favorites.map((favorite) => (
            <Text key={favorite.artist}>
              {favorite.artist} - {favorite.time}
            </Text>
          ))}
        </View>


        <View style={styles.square}>
          <View className="scene-flex">
            <Text style={styles.sceneHeader}>{scen1.name}</Text>

          </View>


          {scen1.performances.map((performance) => (
            <View style={styles.textArtist} key={performance.artist}>
              <Text style={{ display: 'flex', justifyContent: 'space-between' }}>
                {performance.artist} - {performance.time}
                <TouchableOpacity onPress={() => addFavorite(performance.artist, performance.time)}>
                <Text >favorite</Text>
                </TouchableOpacity>
              </Text>
            </View>
          ))}


        </View>
        {/* Robert start */}
        <View style={styles.square}>
          <View className='scene-flex'>
            <Text style={styles.sceneHeader}>{scen2.name}</Text>

          </View>

          {scen2.performances.map((performance) => (
            <View style={styles.textArtist}>
              <Text key={performance.artist} style={{ display: 'flex', justifyContent: 'space-between' }}>

                {performance.artist} - {performance.time}

                <View className='favorite-icon-container'>
                  <TouchableOpacity onPress={() => addFavorite(performance.artist, performance.time)}>
                    <Text>Add Favorite</Text>
                  </TouchableOpacity>
                </View>
              </Text>
            </View>
          ))}

        </View>
        {/* Robert slut */}

        <View style={styles.square}>
          <View className='scene-flex'>
            <Text style={styles.sceneHeader}>{scen3.name}</Text>

          </View>

          {scen3.performances.map((performance) => (
            <View style={styles.textArtist}>
              <Text key={performance.artist} style={{ display: 'flex', justifyContent: 'space-between' }}>

                {performance.artist} - {performance.time}
                <View className='favorite-icon-container'>
                  <TouchableOpacity onPress={() => addFavorite(performance.artist, performance.time)}>
                    <Text>Add Favorite</Text>
                  </TouchableOpacity>
                </View>
              </Text>
            </View>
          ))}
        </View>

      </View>
    </ScrollView>
              </>
  )
}