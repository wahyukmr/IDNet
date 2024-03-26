import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {useTheme} from '../contexts/Theme';

const {height} = Dimensions.get('window');

const Welcome = () => {
  const {theme} = useTheme();
  const navigation = useNavigation();

  return (
    <View style={{...styles.container, backgroundColor: theme.bg100}}>
      <Animated.Image
        entering={FadeInUp.delay(200).duration(1000)}
        source={require('../assets/images/welcome-image.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={{paddingHorizontal: 40, paddingTop: 40}}>
        <Text
          style={{
            ...styles.textHeading,
            color: theme.primary100,
            shadowColor: theme.primary100,
          }}>
          Welcome to IDNet!
        </Text>
        <Text style={{...styles.textSubHeading, color: theme.text200}}>
          Connect, share, and create with friends and family. Join the IDNet
          community today and start your social media journey with us!
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{...styles.btnLogin, backgroundColor: theme.primary100}}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{...styles.btnText, color: theme.primary300}}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{...styles.btnRegister, backgroundColor: theme.primary300}}
          onPress={() => navigation.navigate('Register')}>
          <Text style={{...styles.btnText, color: theme.text100}}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight + 20,
  },
  image: {
    width: '100%',
    height: height / 2.5,
    marginBottom: 20,
  },
  textHeading: {
    fontSize: 36,
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  textSubHeading: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    gap: 20,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  btnLogin: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  btnRegister: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
