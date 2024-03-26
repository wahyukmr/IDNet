import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useTheme} from '../contexts/Theme';
import {CreatePost, FeedPost, Profile, Welcome} from '../screens';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const {theme} = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarStyle: theme === 'darkLight' ? 'light' : 'dark',
          statusBarColor: theme.bg100,
          statusBarTranslucent: true,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Feed" component={FeedPost} />
        <Stack.Screen name="Create Post" component={CreatePost} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
