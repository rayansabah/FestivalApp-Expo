import { View, Text, StyleSheet } from 'react-native'

const center = [58.07814215851804, 13.020617914330508]
const radius = 200;

export default function Location() {
    const styles = StyleSheet.create({
        mapSquare: {
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 25,
            backgroundColor: '#ffff',
            padding: 10,
            width: 300,
            height: 250,
            display: 'flex',
        },
        locationSquare: {
            margin: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            padding: 9,
            borderRadius: 10,
            backgroundColor: '#ffffff',
            width: 300,
        },
        header: {
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
        }
    });


    return <View>
        <View style={styles.locationSquare}>
            <Text style={styles.header}>Område</Text>
            <Text>info om fliken</Text>
        </View>
        <View style={styles.mapSquare}>
            <Text>Karta Här</Text>
        </View>

        <View style={styles.locationSquare}>
            

            <Text>info om områderna</Text>
        </View>


    </View>

}