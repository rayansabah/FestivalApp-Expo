import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomHeader from '../component/CustomHeader';

//

const Contact = () => {
  return (<>
    <View>
      <CustomHeader title="Home" />
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.square}>
          <Text style={styles.header}>Kontakta oss</Text>
          <Text>Enter your contact information here.</Text>
        </View>
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
});

export default Contact;
