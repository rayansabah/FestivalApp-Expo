
import SponsorData from '../jsonTemp/sponsorsInfo.json'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import CustomHeader from '../component/CustomHeader';

function Sponsor() {

  return (
    <>
      <View>
        <CustomHeader title="Home" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View>
          <View style={styles.square}>
            <Text style={styles.header}>Sponsorer</Text>
            {SponsorData.Sponsors.map((sponsor, index) => (
              <View key={index}>
                <Image
                  source={{ uri: sponsor.picture }} // Update with the sponsor's logo URI
                  style={{ width: 280, height: 200 }}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>

  )

}
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
});
export default Sponsor;