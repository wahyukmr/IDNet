import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {FadeInUp} from 'react-native-reanimated';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Animated.Image
        entering={FadeInUp.delay(200).duration(1000)}
        source={require('../assets/images/welcome-image.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.text}>Selamat datang di SocialApp!</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#FCEEF5',
    backgroundColor: 'yellow',
    marginTop: StatusBar.currentHeight,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    // backgroundColor: 'yellow',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});
