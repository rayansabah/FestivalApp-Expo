import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import MapView, { Marker, Circle, Polygon } from 'react-native-maps';



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
        },
        map: {
            width: '100%',
            height: '100%',
        },
    });

    const coordinate = {
        latitude: 58.07737507979663,
        longitude: 13.026591152316357,
    };

    const polygonTorget = [
        { latitude: coordinate.latitude + 0.000216, longitude: coordinate.longitude - 0.0003 },
        { latitude: coordinate.latitude - 0.0003, longitude: coordinate.longitude - 0.0004 },
        { latitude: coordinate.latitude - 0.0001, longitude: coordinate.longitude + 0.0005 },
        { latitude: coordinate.latitude + 0.0003, longitude: coordinate.longitude + 0.00025 },
    ];

    const polygon2 = [
        { latitude: 58.077426167451835, longitude: 13.019473245042012 },
        { latitude: 58.077426167451866, longitude: 13.020473245042912 },
        { latitude: 58.076426167451866, longitude: 13.020473245042912 },
        { latitude: 58.076426167451866, longitude: 13.019473245042912 },
    ];

    return (
        <View>
            <View style={styles.locationSquare}>
                <Text style={styles.header}>Område</Text>
                <Text>info om fliken</Text>
            </View>

            <View style={styles.mapSquare}>
                <MapView style={styles.map} initialRegion={{
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }} legalLabelInsets={{ bottom: 'never', right: 'never' }}>

                    <Polygon
                        coordinates={polygonTorget}
                        fillColor={'rgba(200, 200, 200, 0.3)'}
                        strokeColor={'rgba(0, 0, 0, 0.5)'}
                        strokeWidth={2}
                    />
                    <Polygon
                        coordinates={[
                            { latitude: 58.077333351169536, longitude: 13.02099001319721 },
                            { latitude: 58.07723733716411, longitude: 13.01978686957709 },
                            { latitude: 58.077120513358736, longitude: 13.0190153860882 },
                            
                            { latitude: 58.07681417095906, longitude: 13.019014088881251 },
                            { latitude: 58.07644897636327, longitude: 13.01909812648185 },
                            { latitude: 58.076353446377475, longitude: 13.019995146930551 },
                            { latitude: 58.07626175773855, longitude: 13.020906869929897 },
                            { latitude: 58.07677078510145, longitude: 13.02175065275932 },
                           
                        ]}
                        fillColor={'rgba(200, 200, 200, 0.3)'}
                        strokeColor={'rgba(255, 45, 0, 0.5)'}
                        strokeWidth={5}
                    />
                </MapView>
            </View>


            <View style={styles.locationSquare}>
                <Text>info om områderna</Text>
            </View>
        </View>
    )
}