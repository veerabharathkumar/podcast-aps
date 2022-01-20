import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { banner, calendar, add, clock, play, progress } from './Icons';

export default EpisodeItem = ({ onPress = null, item, index }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={{ flexDirection: "row", alignItems: 'center', borderTopWidth: 0.3, borderColor: 'grey', paddingTop: 10 }}>
            <Image source={banner} style={{ height: 100, width: 100 }} resizeMode='contain' />
            <View style={{ paddingLeft: 18 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={calendar} style={{ height: 10, width: 10 }} resizeMode='contain' />
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: 'grey' }}>  25 Dec, 2021  </Text>
                    <Image source={clock} style={{ height: 10, width: 10 }} resizeMode='contain' />
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: 'grey' }}> 1hr 45 min  </Text>
                </View>
                <Text numberOfLines={1} style={{ fontFamily: 'Roboto-Regular', fontSize: 20, color: '#000', paddingTop: 2 }}>Episode Name</Text>
                <Text numberOfLines={1} style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: 'grey', paddingTop: 2 }}>Episode short line description will end here.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={play} style={{ height: 18, width: 18 }} resizeMode='contain' />
                        {
                            index === 0 && (
                                <>
                                    <Image source={progress} style={{ height: 10, width: 50, marginLeft: 10 }} resizeMode='contain' />
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: 'grey', marginLeft: 10 }}>45 min  </Text></>
                            )
                        }
                    </View>
                    <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={add} style={{ height: 18, width: 18 }} resizeMode='contain' />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};