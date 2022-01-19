import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import { get } from "lodash";
import { banner, calendar, add, clock, play, progress, back } from '../../components/Icons';

export default SeeAllEpisodes = (props) => {
    const { title } = get(props, 'route.params');

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ flexDirection: "row", alignItems: 'center', paddingTop: 10 }}>
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
            </View>
        )
    }

    const ItemSeparator = () => {
        return (
            <View style={{ paddingTop: 18 }} />
        )
    }
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ position: 'relative' }}>
                <View style={{ position: 'absolute', left: 18, top: 5, zIndex: 1 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => props.navigation.goBack()}>
                        <Image source={back} style={{ height: 15, width: 15 }} resizeMode='contain' />
                        <Text style={{ fontFamily: 'Roboto-regular', fontSize: 14, color: '#040708' }}> Back</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 20, color: '#040708', textAlign: 'center' }}>{title}</Text>
            </View>
            <View style={{ padding: 18 }}>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
                    renderItem={renderItem}
                    nestedScrollEnabled={true}
                    keyExtractor={(item, index) => index}
                    ItemSeparatorComponent={ItemSeparator}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => <View style={{ paddingTop: 18 }} />}
                    ListFooterComponent={() => <View style={{ paddingBottom: 36 }} />}
                />
            </View>
        </SafeAreaView>
    );
};