import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImgPopup from '../component/ImgPopup';
import { Feather } from '@expo/vector-icons';
import TextPopup from '../component/TextPopup';


import data from '../jsonTemp/scene.json';

import CustomHeader from '../component/CustomHeader';



const scen1 = data.Scenes.find((scene) => scene.name === 'Torget');
const scen2 = data.Scenes.find((scene) => scene.name === 'Stadsparken');
const scen3 = data.Scenes.find((scene) => scene.name === 'Stora Scenen');

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
    sceneAndPopup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

    },
    popupContainer: {
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 20,
    },
    favirotAndArtist: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

    },
    favoritContainer: {
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 20,
    },
    sceneHeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
    },
    headerContainer: {
      flex: 1,
      alignItems: 'center',
    },
    textPopupContainer: {
      position: 'absolute',
      top: 15,
      right: 10,
      
      
    },
  });



  /// Favorit funktion start  
  const [favorites, setFavorites] = useState([]);

  const addFavorite = async (artist, time) => {
    const newFavorite = { artist, time };
    let updatedFavorites;
    if (favorites.some((favorite) => favorite.artist === artist)) {
      updatedFavorites = favorites.filter((favorite) => favorite.artist !== artist);
    } else {
      updatedFavorites = [...favorites, newFavorite];
    }
    setFavorites(updatedFavorites);
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = async (artist) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.artist !== artist);
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
              <View style={styles.sceneHeaderContainer}>
                <View style={styles.headerContainer}>
                  <Text style={styles.header}>{scene.name}</Text>
                </View>
                <View style={styles.textPopupContainer}>
                  <TextPopup src={
                    <View>
                      <Text>Favoriter:</Text>
                      {favorites.map((favorite) => (
                        <Text key={favorite.artist}>
                          {favorite.artist} - {favorite.time}
                        </Text>
                      ))}
                    </View>
                  } />
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
          <View style={styles.sceneAndPopup}>
            <Text style={styles.sceneHeader}>{scen1.name}</Text>
            <View style={styles.popupContainer}>
              <ImgPopup src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGrby2IngYbvnblxD_d78O-TFa7Q71Ei1owPAJ_dHhtkBeNtbga6VAtNaQoK8O5b0zfY&usqp=CAU" />
            </View>

          </View>



          {scen1.performances.map((performance) => (
            <View style={styles.textArtist}>
              <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 10 }}>{performance.artist} - {performance.time}</Text>
                <TouchableOpacity onPress={() => addFavorite(performance.artist, performance.time)}>
                  {favorites.some((favorite) => favorite.artist === performance.artist) ?
                    <Feather name="heart" size={16} color="red" /> :
                    <Feather name="heart" size={16} color="gray" />
                  }
                </TouchableOpacity>
              </View>
            </View>
          ))}


        </View>
        {/* Robert start */}
        <View style={styles.square}>
          <View style={styles.sceneAndPopup}>
            <Text style={styles.sceneHeader}>{scen2.name}</Text>
            <View style={styles.popupContainer}>
              <ImgPopup src="https://media.tenor.com/zrpyKEyxZGwAAAAC/fat-cat-laser-eyes.gif" />
            </View>

          </View>

          {scen2.performances.map((performance) => (
            <View style={styles.textArtist}>
              <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 10 }}>{performance.artist} - {performance.time}</Text>
                <TouchableOpacity onPress={() => addFavorite(performance.artist, performance.time)}>
                  {favorites.some((favorite) => favorite.artist === performance.artist) ?
                    <Feather name="heart" size={16} color="red" /> :
                    <Feather name="heart" size={16} color="gray" />
                  }
                </TouchableOpacity>
              </View>
            </View>
          ))}

        </View>
        {/* Robert slut */}

        <View style={styles.square}>
          <View style={styles.sceneAndPopup}>
            <Text style={styles.sceneHeader}>{scen3.name}</Text>
            <View style={styles.popupContainer}>
              <ImgPopup src="https://media2.giphy.com/media/aYZIeUDU3qvPa/giphy.gif?cid=6c09b952rh6g343ssn5uzqaxr3k2wq7rra49be6g71rkwsql&rid=giphy.gif&ct=g" />
            </View>

          </View>

          {scen3.performances.map((performance) => (
            <View style={styles.textArtist}>
              <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 10 }}>{performance.artist} - {performance.time}</Text>
                <TouchableOpacity onPress={() => addFavorite(performance.artist, performance.time)}>
                  {favorites.some((favorite) => favorite.artist === performance.artist) ?
                    <Feather name="heart" size={16} color="red" /> :
                    <Feather name="heart" size={16} color="gray" />
                  }
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  </>
  )
}