import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Image, ScrollView, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { add, back, banner, progress, right_path, play, share, calendar, clock } from '../../../components/Icons';

export default EpisodeDetails = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView >
                <LinearGradient colors={['#e49a8c', '#cd8070']} style={{ flex: 1, height: 300, width: '100%' }}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={{ position: 'relative' }}>
                            <View style={{ position: 'absolute', left: 18, top: 15, zIndex: 1 }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => props.navigation.goBack()}>
                                    <Image source={back} style={{ height: 15, width: 15, tintColor: 'white' }} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>
                </LinearGradient>
                <View style={{ flex: 1, backgroundColor: '#efeeee', marginTop: -120, borderRadius: 30 }}>
                    <View style={{ marginTop: -80 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={banner} style={{ height: 200, width: 200 }} resizeMode='contain' />
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={progress} style={{ height: 5, width: 200 }} resizeMode='cover' />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 200, paddingVertical: 5 }}>
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 10, color: 'grey' }}>15:45</Text>
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 10, color: 'grey' }}>-25:27</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingTop: 10 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 24, color: 'black' }}>Episode Name</Text>
                                <View style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'baseline' }}>
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: 'black', fontWeight: '500' }}>Show Name </Text>
                                    <Image source={right_path} style={{ height: 10, width: 10, tintColor: '#000' }} resizeMode='contain' />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingTop: 10, alignItems: 'center', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingHorizontal: 40, paddingBottom: 25 }}>
                            <Image source={add} style={{ height: 15, width: 15, tintColor: '#000' }} resizeMode='contain' />
                            <Image source={play} style={{ height: 50, width: 50 }} resizeMode='contain' />
                            <Image source={share} style={{ height: 15, width: 15, tintColor: '#000' }} resizeMode='contain' />
                        </View>
                    </View>

                </View>
                <View style={{ flex: 1, padding: 20 }}>
                    <View style={{ flexDirection: "row", alignItems: 'baseline', paddingTop: 5 }}>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 10, color: 'black' }}>Episode No. 1  </Text>
                        <Image source={calendar} style={{ height: 10, width: 10, tintColor: '#000' }} resizeMode='contain' />
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 10, color: 'black' }}>  25 Dec, 2021  </Text>
                        <Image source={clock} style={{ height: 10, width: 10, tintColor: '#000' }} resizeMode='contain' />
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 10, color: 'black' }}>  1hr 45 min  </Text>
                    </View>
                    <View style={{ paddingVertical: 20 }}>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: 'black' }}>Maria Garcia was 9 years old and living on the U.S.-Mexico border when Selena was murdered. Twenty five years later, Maria is on a quest to understand what it means to love, mourn and remember Selena. In this intimate journey, Maria explores what Selena's legacy shows us about belonging in America. Editors’ Notes: Mexican-American recording artist Selena Quintanilla not only popularized Tejano music to mainstream American audiences, but also helped put Latinos on the map and broke barriers of all kinds before her untimely passing in 1995. Journalist María García initially took notice of her talent when she was only seven years old. “I couldn’t articulate this when I was younger, but I felt it—a profound sense that she mattered, not just because of her music but because of her expansive cultural impact,” García tells Apple Podcasts. On her podcast Anything for Selena, Apple Podcasts’ Show of the Year of 2021, García, who most recently served as Managing Editor for Boston public radio station WBUR, combines rigorous reporting with impassioned storytelling to honor her legacy. She also explores the indelible mark she left on Latino identity and belonging, whether it’s fatherhood, big-butt politics, and the fraught relationship with whiteness and language. Though she sees the show as a personal journey “to make meaning of Selena's life and legacy,” García felt it was important to make sense of how she profoundly touched the hearts and minds of many. “It’s not a biography podcast. Instead, we tried to make meaning of Selena's life and legacy,” she says. “So many people wrote to me telling me the storytelling in the podcast made them feel seen."</Text>
                    </View>
                    <View style={{ paddingVertical: 20, borderTopColor: 'grey', borderTopWidth: 0.5 }}>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: 'black', paddingBottom: 16 }}>Show Details</Text>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: 'black' }}>Lorem ipsum dolor sit amet, consectetu
                            Laboris nisi ut aliquip ex ea commodo consequat</Text>
                        <TouchableOpacity activeOpacity={1} style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: '#0579b4', fontWeight: '500' }}>Go to Show </Text>
                            <Image source={right_path} style={{ height: 10, width: 10, tintColor: '#0579b4' }} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingVertical: 20, borderTopColor: 'grey', borderTopWidth: 0.5 }}>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: 'black', paddingBottom: 16 }}>Author</Text>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 12, color: 'black' }}>Lorem ipsum dolor sit amet, consectetu
                            Laboris nisi ut aliquip ex ea commodo consequat</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};