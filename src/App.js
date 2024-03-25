import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from './contexts/Theme';
import Navigator from './routes';

const App = () => {
  return (
    <ThemeProvider>
      <View style={{flex: 1}}>
        <Navigator />
      </View>
    </ThemeProvider>
  );
};
export default App;
