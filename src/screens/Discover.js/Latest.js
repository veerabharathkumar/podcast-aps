import React from 'react';
import { View, Text, FlatList } from 'react-native';
import EpisodeItem from '../../components/EpisodeItem';

import SeeAll from '../../components/SeeAll';

export default Latest = ({ navigation }) => {
    const renderItem = ({ item, index }) => {
        return (
            <EpisodeItem item={item} index={index} onPress={()=>navigation.navigate('EpisodeDetails')} />
        )
    }
    const ItemSeparator = () => {
        return (
            <View style={{ paddingTop: 10 }} />
        )
    }
    return (
        <View style={{ padding: 18 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 24, color: '#040708' }}>Latest</Text>
                <SeeAll onPress={() => navigation.navigate('Episodes', { title: 'Latest' })} />
            </View>
            <View style={{ paddingTop: 18 }}>
                <FlatList
                    data={[1, 2, 3]}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                    nestedScrollEnabled={true}
                    ItemSeparatorComponent={ItemSeparator}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};