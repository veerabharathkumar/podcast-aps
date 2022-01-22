import React, { useEffect } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import axios from 'axios';
import { get } from 'lodash';

import HeaderSearch from '../../components/HeaderSearch';
import Latest from './Latest';
import Trending from './Trending';
import Category from './Category';
import { useDispatch, useSelector } from 'react-redux';

import { setFetchedData } from '../../actions/index';


export default Discover = (props) => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.list);
    useEffect(() => {
        axios.get('http://15.207.85.146/cms/feed.xml')
            .then(response => {
                var parseString = require('react-native-xml2js').parseString;
                var xml = response.data;
                const json = {};

                for (const res of xml.match(/(?:<(\w*)(?:\s[^>]*)*>)((?:(?!<\1).)*)(?:<\/\1>)|<(\w*)(?:\s*)*\/>/gm)) {
                    const key = res[1] || res[3];
                    const value = res[2] && parseString(res[2]);
                    json[key] = ((value && Object.keys(value).length) ? value : res[2]) || null;
                }

                var formatedData = [];
                parseString(xml.replace(/&(?!#)/g, "&amp;") ,{preserveWhitespace: true},function (err, result) {
                    let whole_list = result.rss.channel;
                    whole_list.forEach((element) => {
                        var newData = {
                            title: element.title.toString(),
                            description: element.description.toString(),
                            summary: element["itunes:summary"].toString(),
                            subtitle: element["itunes:subtitle"].toString(),
                            author: element["itunes:author"].toString(),
                            thumbnail: element.image[0].url.toString().replace("cms.prideplex.com", "15.207.85.146"),
                            episodesCount: element.item.length,
                            podcastName: element.title.toString(),
                            item: [],
                        }
                        element.item.forEach((elemen, k) => {
                            let individualItem = {
                                image: elemen["itunes:image"] ? elemen["itunes:image"][0].$.href.toString().replace("cms.prideplex.com", "15.207.85.146") : element.image[0].url.toString().replace("cms.prideplex.com", "15.207.85.146"),
                                description: elemen.description.toString(),
                                duration: elemen["itunes:duration"].toString(),
                                url: elemen.link.toString().replace("cms.prideplex.com", "15.207.85.146"),
                                linkUrl: get(elemen, 'enclosure[0].$.url').toString().replace("cms.prideplex.com", "15.207.85.146"),
                                type: get(elemen, 'enclosure[0].$.type', '').toString(),
                                pubDate: elemen.pubDate.toString(),
                                title: elemen.title.toString(),
                                subtitle: elemen['itunes:subtitle'].toString(),
                                author: elemen["itunes:author"].toString(),
                                index: k
                            }
                            newData.item[k] = individualItem;
                        })
                        formatedData.push(newData);
                        dispatch(setFetchedData(formatedData));
                    });
                });
                return response;
            })
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
                data={[]}
                ListEmptyComponent={null}
                keyExtractor={(item, index) => index}
                renderItem={null}
                ListHeaderComponent={() => (
                    <>
                        <HeaderSearch />
                        <Trending title={'Trending'} navigation={props.navigation} data={get(list, 'data', [])} />
                        <Latest navigation={props.navigation} />
                        <Category navigation={props.navigation} />
                        <View style={{ paddingTop: 18 }}>
                            <Trending
                                title={'Top Hits'}
                                seeall={true}
                                navigation={props.navigation}
                            />
                        </View>
                    </>
                )}
            />
        </SafeAreaView>
    );
};