import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';

import { get } from "lodash";
import { banner } from "../../components/Icons";
import HeaderSearch from '../../components/HeaderSearch';


export default SearchResult = (props) => {
    const { title } = get(props, 'route.params');

    const renderItem = () => {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('Episodes', { title: title })}>
                <Image source={banner} style={{ height: 150, width: 150 }} resizeMode='contain' />
                <View style={{ paddingTop: 12 }}>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: 'grey' }}>43 Episodes</Text>
                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 18, color: '#040708' }}>Show Name</Text>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, color: '#040708' }}>Author Name</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const ItemSeparator = () => {
        return (
            <View style={{ paddingTop: 18 }} />
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: 10 }}>
                <HeaderSearch />
            </View>
            <View style={{ paddingLeft: 30, paddingTop: 8 }}>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 18, color: '#040708' }}>Result for {title}</Text>
            </View>
            <View style={{ padding: 18 }}>
                <FlatList
                    numColumns={2}
                    columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
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