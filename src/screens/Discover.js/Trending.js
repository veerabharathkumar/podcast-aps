import React from 'react';
import { View, Image, Text, FlatList ,TouchableOpacity} from 'react-native';
import { banner } from '../../components/Icons';

export default Trending = ({ title = '', seeall = false, navigation }) => {
    const renderItem = () => {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ShowDetails')}>
                <Image source={banner} style={{ height: 150, width: 150 }} resizeMode='contain' />
                <View style={{ paddingTop: 18 }}>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 15, color: 'grey' }}>43 Episodes</Text>
                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 20, color: '#040708', paddingTop: 2 }}>Show Name</Text>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 15, color: '#040708', paddingTop: 2 }}>Author Name</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const ItemSeparator = () => {
        return (
            <View style={{ paddingLeft: 10 }} />
        )
    }
    return (
        <View style={{ padding: 18, paddingRight: 0 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 24, color: '#040708' }}>{title}</Text>
                {
                    seeall && (
                        <TouchableOpacity style={{ paddingRight: 18 }} onPress={() => navigation.navigate('SeeAll', { title: title })}>
                            <Text style={{ fontFamily: 'Roboto-regular', fontSize: 16, color: '#040708' }}>See All</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
            <View style={{ paddingTop: 18 }}>
                <FlatList
                    data={[11, 12, 13, 14, 15, 16, 17, 18, 19, 10]}
                    renderItem={renderItem}
                    nestedScrollEnabled={true}
                    keyExtractor={(item, index) => index}
                    horizontal
                    ItemSeparatorComponent={ItemSeparator}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};