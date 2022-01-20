import React from 'react';
import { ScrollView, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';

import HeaderSearch from '../../components/HeaderSearch';

export default Search = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#faa819' }}>
            <ScrollView>
                <HeaderSearch />
                {
                    ["News", "Music", "Comedy", "Devotion", "Business", "Politics", "History", "Sports", "Arts"].map((item) => {
                        return (
                            <TouchableOpacity activeOpacity={1} style={{ paddingHorizontal: 10 }} onPress={() => navigation.navigate('SearchResult', { title: item })}>
                                <Text style={{ padding: 10, fontFamily: 'Roboto-Bold', color: 'white', fontSize: 26 }}>{item}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    );
};