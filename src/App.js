import React from 'react';
import {StyleSheet, View} from 'react-native';
import FeedPostScreen from './screens/FeedPostScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <FeedPostScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
