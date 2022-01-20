import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { logo_eng, logo_other, tick } from "../../components/Icons";

export default Language = () => {
    const [id, setId] = useState("");
    return (
        <View style={{ flexDirection: 'row' }} >
            {
                ['english', 'other'].map((item, index) => {
                    return (
                        <TouchableOpacity activeOpacity={1} key={index} onPress={() => setId(item)} style={{ paddingTop: 15, paddingLeft: index == 0 ? 0 : 10 }}>
                            {
                                (id === item) && (
                                    <View style={{ position: 'absolute', right: 5, top: 10, zIndex:1 }}>
                                        <Image style={{ height: 25, width: 25,resizeMode:'contain' }} source={tick} />
                                    </View>
                                )
                            }
                            <Image style={{ height: 100, width: 100,resizeMode:"contain" }} source={item === 'english' ? logo_eng : logo_other} />
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
};