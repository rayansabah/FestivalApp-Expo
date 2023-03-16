import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import CustomHeader from '../component/CustomHeader';
import VeganIcon from '../component/VeganIcon';
import MeatIcon from '../component/MeatIcon'

import food from '../jsonTemp/food.json';

const Food = () => {
  return (<>
    <View>
      <CustomHeader title="Home" />
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>

        <View>
          {food.FoodInfo.map(food => (
            <View style={styles.square}>
              <Text style={styles.header}>{food.name}</Text>
              <Text>
                {food.info.map(item => (
                  <Text>{item}</Text>
                ))}
              </Text>
            </View>
          ))}
        </View>

        {food.FoodMenu.map((menu, index) => (
          <View key={index}>
            <View key={menu.name} style={styles.square}>

              <View style={styles.foodContainer}>
                <View style={styles.foodName}>
                  <Text style={styles.foodHeader}>{menu.name}</Text>
                </View>
                
                <VeganIcon isVegan={menu.vegan === 'true'} />
                <MeatIcon isMeat={menu.meat === 'true'} />
                
              </View>
              {menu.menu.map((item, index) => (
                <View style={styles.textFood}>
                  <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }} >
                    <Text key={index}>
                      {item.food}
                    </Text>


                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}

      </View>
    </ScrollView>
  </>
  );
};

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
    width: 340,
  },
  foodHeader: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textFood: {
    borderRadius: 15,
    backgroundColor: '#e9e9e9',
    width: 'auto',
    marginBottom: 5,
    marginHorizontal: 5,
    padding: 5,
  },
  foodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
   
  },
  foodName: {
    flex: 1,
  }
});

export default Food;
