import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default SeeAll = ({ onPress = null }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={{ fontFamily: 'Roboto-regular', fontSize: 16, color: '#040708' }}>See All</Text>
        </TouchableOpacity>
    );
};