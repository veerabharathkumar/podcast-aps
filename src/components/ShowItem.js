import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { banner } from './Icons';

export default ShowItem = ({ onPress = null }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress}>
            <Image source={banner} style={{ height: 150, width: 150 }} resizeMode='contain' />
            <View style={{ paddingTop: 18 }}>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 15, color: 'grey' }}>43 Episodes</Text>
                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 20, color: '#040708', paddingTop: 2 }}>Show Name</Text>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 15, color: '#040708', paddingTop: 2 }}>Author Name</Text>
            </View>
        </TouchableOpacity>
    );
};