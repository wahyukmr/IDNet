import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const LoadContent = ({message}) => {
  return (
    <View style={styles.loadingWrapper}>
      <ActivityIndicator size="large" />
      <Text>{message}</Text>
    </View>
  );
};

export default LoadContent;

const styles = StyleSheet.create({
  loadingWrapper: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
