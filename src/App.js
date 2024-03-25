import React from 'react';
import {StatusBar, View, useColorScheme} from 'react-native';
import Navigator from './routes';

const App = () => {
  const dark = useColorScheme() === 'dark';

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={dark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
      />
      <Navigator />
    </View>
  );
};
export default App;
