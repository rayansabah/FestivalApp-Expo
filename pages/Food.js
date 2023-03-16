import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomHeader from '../component/CustomHeader';

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


        {food.FoodMenu.map((Food, index) => (
          <View key={index}>
            <View style={styles.square}>

              <Text style={styles.foodHeader}>{Food.name}</Text>

              {Food.menu.map((menu, index) => (
                <View className='text-food'>
                  <Text key={index}>
                    <Text>{menu}</Text>

                  </Text>
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
  }
});

export default Food;
