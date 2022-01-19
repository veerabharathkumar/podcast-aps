import React from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';

import HeaderSearch from './HeaderSearch';
import Latest from './Latest';
import Trending from './Trending';
import Category from './Category';

export default Discover = (props) => {
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
                        <Trending title={'Trending'} navigation={props.navigation} />
                        <Latest />
                        <Category />
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