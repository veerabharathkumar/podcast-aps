import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import Language from '../components/Language';
import { right_path } from "../components/Icons";

export default Welcome = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#faa819' }}>
            <View style={{ flex: 1, padding: 30, paddingBottom: 60, justifyContent: 'flex-end' }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Roboto-Bold' }} >Select Your Language</Text>
                    <Language />
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Bold' }} >You can change it later</Text>
                <TouchableOpacity activeOpacity={1} style={{ alignItems: 'center', flexDirection: "row",paddingTop:10 }} onPress={() => props.navigation.navigate('dashboard')}>
                    <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white', fontFamily: 'Roboto-Bold' }} >Continue </Text>
                    <Image style={{ height: 20, width: 20, resizeMode: "contain",marginTop:5 }} source={right_path} />
                </TouchableOpacity>
            </View>
        </View>
    );
};