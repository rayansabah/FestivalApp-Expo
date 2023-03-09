import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


import data from '../jsonTemp/scene.json';


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
    }
  });


  return (

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
        <View className="scene-flex">
          <Text style={styles.sceneHeader}>{scen1.name}</Text>

        </View>

        {scen1.performances.map((performance) => (
          <View className="text-artist" key={performance.artist}>
            <Text style={{ display: 'flex', justifyContent: 'space-between' }}>
              {performance.artist} - {performance.time}


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
          <View className='text-artist'>
            <Text key={performance.artist} style={{ display: 'flex', justifyContent: 'space-between' }}>

              {performance.artist} - {performance.time}

              <View className='favorite-icon-container'>

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
          <View className='text-artist'>
            <Text key={performance.artist} style={{ display: 'flex', justifyContent: 'space-between' }}>

              {performance.artist} - {performance.time}
              <View className='favorite-icon-container'>

              </View>
            </Text>
          </View>
        ))}
      </View>

    </View>
  )
}