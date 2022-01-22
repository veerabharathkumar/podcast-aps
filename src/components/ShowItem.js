import { get } from 'lodash';
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

export default ShowItem = ({ onPress = null, item }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress}>
            <Image source={{ uri: get(item, 'thumbnail') }} style={{ height: 150, width: 150, borderRadius: 10 }} resizeMode='contain' />
            <View style={{ paddingTop: 18 }}>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 15, color: 'grey' }}>{get(item, 'episodesCount', '47')} Episodes</Text>
                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 20, color: '#040708', paddingTop: 2 }}>{get(item, 'podcastName')}</Text>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 15, color: '#040708', paddingTop: 2 }}>{get(item, 'author')}</Text>
            </View>
        </TouchableOpacity>
    );
};