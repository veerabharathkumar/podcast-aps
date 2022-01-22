import React from 'react';
import { View, Image, Text, TextInput, Platform } from 'react-native';
import { search, close } from './Icons';

export default HeaderSearch = (props) => {
    return (
        <View style={{ padding: 18, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#f2f1f0', borderRadius: 15, paddingHorizontal: 10, alignItems: 'center' }}>
                <Image style={{ height: 20, width: 20, resizeMode: "contain" }} source={search} />
                <TextInput style={{ flex: 1, paddingHorizontal: 10, paddingVertical: Platform.OS === 'android' ? 0 : 10, fontFamily: 'Roboto-Regular' }} placeholder={'Search Podcasts'} placeholderTextColor={'black'} />
                <Image style={{ height: 20, width: 20, resizeMode: "contain" }} source={close} />
            </View>
            <View style={{ paddingLeft: 10 }} >
                <Text style={{ color: '#000', fontFamily: 'Roboto-Regular' }}>Cancel</Text>
            </View>
        </View>
    );
};