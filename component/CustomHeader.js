

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LogoSvg from '../assets/svgComp/LogoHead.js'

const CustomHeader = ({ title }) => {
    const navigation = useNavigation();

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 100, width: '95%' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ flex: 1 }}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <LogoSvg />
            <View style={{ flex: 1 }} />
        </View>
    );
};
export default CustomHeader;
