import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import { get } from "lodash";
import EpisodeItem from '../../components/EpisodeItem';
import { back } from '../../components/Icons';

export default Episodes = (props) => {
    const { title } = get(props, 'route.params');

    const renderItem = ({ item, index }) => {
        return (
            <EpisodeItem index={index} onPress={() => props.navigation.navigate('EpisodeDetails', {itemId: 86,otherParam: 'anything you want here'})} />
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