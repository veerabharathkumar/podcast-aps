import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Store from './src/components/Store';
import Welcome from './src/screens/Welcome';
import Discover from './src/screens/Discover.js';

import Shows from './src/screens/Shows/index';
import ShowDetails from './src/screens/Shows/Details.js';
import Episodes from './src/screens/Episodes/index';
import EpisodeDetails from './src/screens/Episodes/Details.js';
import Search from './src/screens/Search/index';
import SearchResult from './src/screens/SearchResult/index';
import MyLibrary from './src/screens/MyLibrary/index';

import { library, discover, search } from './src/components/Icons';

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Option = ({ text, image }) => {
    return (
      <View style={{ paddingTop: 10, alignItems: 'center' }}>
        <Image source={image} resizeMode='contain' style={{ width: 20, height: 20 }} />
        <Text style={{ fontSize: 10, fontFamily: 'Roboto-Regular', color: '#818285', paddingTop: 5 }} >{text}</Text>
      </View>
    )
  }

  const Discovers = createNativeStackNavigator();
  function DiscoverStackScreen() {
    return (
      <Discovers.Navigator screenOptions={{ headerShown: false }} >
        <Discovers.Screen name="Discover" component={Discover} />
        <Discovers.Screen name="Shows" component={Shows} />
        <Discovers.Screen name="ShowDetails" component={ShowDetails} />
        <Discovers.Screen name="Episodes" component={Episodes} />
        <Discovers.Screen name="EpisodeDetails" component={EpisodeDetails} />
      </Discovers.Navigator>
    )
  }

  const SearchScreen = createNativeStackNavigator();
  function SearchStackScreen() {
    return (
      <SearchScreen.Navigator screenOptions={{ headerShown: false }} >
        <Discovers.Screen name="Search" component={Search} />
        <Discovers.Screen name="SearchResult" component={SearchResult} />
      </SearchScreen.Navigator>
    )
  }

  const DashboardNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true }}>
        <Tab.Screen name="DiscoverStack" component={DiscoverStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Option image={discover} text={'Discover'} />
            )
          }} />
        <Tab.Screen name="Search" component={SearchStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Option image={search} text={'Search'} />
            )
          }} />
        <Tab.Screen name="More" component={MyLibrary}
          options={{
            tabBarIcon: ({ focused }) => (
              <Option image={library} text={'My Library'} />
            )
          }}
        />
      </Tab.Navigator>
    );
  }


  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="dashboard" component={DashboardNavigation} options={{ gestureEnabled: false }} />
          {/* <Stack.Screen name="DashboardNavigation" component={DashboardNavigation} options={{ gestureEnabled: false }} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ gestureEnabled: false }} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
