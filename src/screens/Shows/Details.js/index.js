import { get } from 'lodash';
import moment from 'moment';
import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Image, ScrollView, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

import { add, back, progress, right_path, play, share, calendar, clock, sort } from '../../../components/Icons';

export default ShowDetails = (props) => {
    const item = useSelector(state => state.list.data[0]);
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView >
                <LinearGradient colors={['#e49a8c', '#a85643']} style={{ flex: 1, width: '100%', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={{ position: 'relative' }}>
                            <View style={{ position: 'absolute', left: 18, top: 15, zIndex: 1 }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => props.navigation.goBack()}>
                                    <Image source={back} style={{ height: 15, width: 15, tintColor: 'white' }} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ padding: 50, paddingBottom: 0 }}>
                                    <Image source={{ uri: get(item, 'thumbnail') }} style={{ height: 200, width: 200, borderRadius: 10 }} resizeMode='contain' />
                                    <View style={{ paddingVertical: 20, alignItems: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 24, color: 'white' }}>{get(item, 'title')}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingHorizontal: 40, paddingBottom: 25 }}>
                                    <TouchableOpacity>
                                        <Image source={add} style={{ height: 15, width: 15, tintColor: 'white' }} resizeMode='contain' />
                                    </TouchableOpacity>
                                    <View style={{ flex: 1, paddingHorizontal: 40, paddingBottom: 20 }}>
                                        <Text numberOfLines={4} style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: 'white', textAlign: 'center' }}>{get(item, 'subtitle')}</Text>
                                    </View>
                                    <Image source={share} style={{ height: 15, width: 15, tintColor: 'white' }} resizeMode='contain' />
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </LinearGradient>
                <View style={{ flex: 1, padding: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, color: '#0579b4', paddingBottom: 16 }}>{get(item, 'episodesCount')} Episodes</Text>
                        <Image source={sort} style={{ height: 12, width: 12 }} resizeMode='contain' />
                    </View>
                    {
                        get(item, 'item', []).slice(0, 3).map((item, index) => {
                            return (
                                <View key={index} style={{ flex: 1, flexDirection: "row", alignItems: 'center', borderTopWidth: 0.3, borderColor: 'grey', paddingVertical: 10 }} >
                                    <Image source={{ uri: get(item, 'image') }} style={{ height: 80, width: 80 }} resizeMode='contain' />
                                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                                        <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('EpisodeDetails', { itemId: get(item,'index') })} >
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={calendar} style={{ height: 10, width: 10 }} resizeMode='contain' />
                                                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 10, color: 'grey' }}>  {moment(item.pubDate).format('DD MMM, YYYY')}  </Text>
                                                <Image source={clock} style={{ height: 10, width: 10 }} resizeMode='contain' />
                                                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 10, color: 'grey' }}> {get(item, 'duration')} mins</Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text numberOfLines={1} style={{ fontFamily: 'Roboto-Regular', fontSize: 18, color: '#000', paddingTop: 2, flexWrap: 'wrap' }}>{get(item, 'title')}</Text>
                                                <Text numberOfLines={1} style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: 'grey', paddingTop: 2, flexWrap: 'wrap' }}>{get(item, 'description')}</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={play} style={{ height: 18, width: 18 }} resizeMode='contain' />
                                                <Image source={progress} style={{ height: 10, width: 50, marginLeft: 10 }} resizeMode='contain' />
                                                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: 'grey', marginLeft: 10 }}>{get(item, 'duration')} min</Text>
                                            </View>
                                            <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={add} style={{ height: 18, width: 18 }} resizeMode='contain' />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                    <TouchableOpacity activeOpacity={1} style={{ paddingTop: 30, paddingBottom: 20, flexDirection: 'row', alignItems: 'baseline' }}>
                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 14, color: '#0579b4' }}>See all {get(item, 'episodesCount')} Episodes</Text>
                        <Image source={right_path} style={{ height: 10, width: 10, tintColor: '#0579b4' }} resizeMode='contain' />
                    </TouchableOpacity>
                    <View style={{ paddingVertical: 20, borderTopColor: 'grey', borderTopWidth: 0.5 }}>
                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 18, color: 'black', paddingBottom: 16 }}>Show Details</Text>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: 'black', paddingBottom: 16 }}>About</Text>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: 'black' }}>{get(item, 'description')}</Text>
                    </View>
                    <View style={{ paddingVertical: 20, borderTopColor: 'grey', borderTopWidth: 0.5 }}>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: 'black', paddingBottom: 16 }}>Authors</Text>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: 'black' }}>{get(item, 'author')}</Text>
                    </View>
                </View>
            </ScrollView>
        </View >
    );
};