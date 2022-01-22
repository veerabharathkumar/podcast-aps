import React from 'react';
import { View, Text, FlatList } from 'react-native';

import ShowItem from '../../components/ShowItem';
import SeeAll from '../../components/SeeAll';

export default Trending = ({ title = '', seeall = false, navigation, data }) => {
    const renderItem = ({item}) => {
        return (
            <ShowItem item={item} onPress={() => navigation.navigate('ShowDetails')} />
        )
    }
    const ItemSeparator = () => {
        return (
            <View style={{ paddingLeft: 10 }} />
        )
    }
    const Header = () => {
        return (
            <View style={{ padding: 9 }} />
        )
    }
    return (
        <View style={{ paddingVertical: 18 }}>
            <View style={{ paddingHorizontal: 18, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 24, color: '#040708' }}>{title}</Text>
                {
                    seeall && (
                        <SeeAll onPress={() => navigation.navigate('Shows', { title: title })} />
                    )
                }
            </View>
            <View style={{ paddingTop: 18 }}>
                <FlatList
                    data={data || []}
                    renderItem={renderItem}
                    nestedScrollEnabled={true}
                    keyExtractor={(item, index) => index}
                    horizontal
                    ItemSeparatorComponent={ItemSeparator}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={Header}
                    ListFooterComponent={Header}
                />
            </View>
        </View>
    );
};