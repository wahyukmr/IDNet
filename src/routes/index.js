import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useTheme} from '../contexts/Theme';
import {CreatePost, FeedPost, Profile, Register, Welcome} from '../screens';
import Login from '../screens/Login';

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
        <Stack.Screen
          name="Login"
          component={Login}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen name="Feed" component={FeedPost} />
        <Stack.Screen name="Create Post" component={CreatePost} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
