import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';

export default Category = (props) => {
    const Header = () => {
        return (
            <View style={{ padding: 18, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 24, color: '#040708' }}>Categories</Text>
                <Text style={{ fontFamily: 'Roboto-regular', fontSize: 16, color: '#040708' }}>See All</Text>
            </View>
        )
    }
    return (
        <View>
            <Header />
            {
                ['Business', 'Politics', 'History', 'Sports'].map((item, index) => {
                    return (
                        <View key={index} style={{ paddingTop: 0, borderTopWidth: 1, borderTopColor: '#ffca05' }}>
                            <View key={index} style={{ backgroundColor: '#faa819', padding: 10, paddingLeft: 18 }} >
                                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 24, color: '#040708' }}>{item}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    );
};