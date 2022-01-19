import React from 'react';
import { View, Image, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './src/screens/Welcome';
import Discover from './src/screens/Discover.js';
import SeeAll from './src/screens/SeeAll.js';
import SeeAllEpisodes from './src/screens/SeeAllEpisodes.js';
import ShowDetails from './src/screens/ShowDetails.js';
import EpisodeDetails from './src/screens/EpisodeDetails.js';

import { library, discover, search } from './src/components/Icons';

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

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
        <Discovers.Screen name="SeeAll" component={SeeAll} />
        <Discovers.Screen name="SeeAllEpisodes" component={SeeAllEpisodes} />
        <Discovers.Screen name="ShowDetails" component={ShowDetails} />
        <Discovers.Screen name="EpisodeDetails" component={EpisodeDetails} />
      </Discovers.Navigator>
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
        <Tab.Screen name="Search" component={Welcome}
          options={{
            tabBarIcon: ({ focused }) => (
              <Option image={search} text={'Search'} />
            )
          }} />
        <Tab.Screen name="More" component={Welcome}
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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="dashboard" component={DashboardNavigation} options={{ gestureEnabled: false }} />
        {/* <Stack.Screen name="DashboardNavigation" component={DashboardNavigation} options={{ gestureEnabled: false }} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ gestureEnabled: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
