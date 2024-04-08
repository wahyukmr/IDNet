import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {radius, shadows, sizes, spaces} from '../constants';
import {useTheme} from '../contexts/Theme';

const {height} = Dimensions.get('window');

const Welcome = () => {
  const {theme} = useTheme();
  const navigation = useNavigation();

  return (
    <View style={{...styles.container, backgroundColor: theme.bg100}}>
      <Animated.Image
        entering={FadeInUp.delay(200).duration(500)}
        source={require('../assets/images/welcome-image.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={{paddingHorizontal: spaces.large, paddingTop: spaces.large}}>
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
          style={{
            ...styles.btnAction,
            elevation: shadows.medium,
            backgroundColor: theme.primary100,
            shadowColor: theme.primary100,
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{...styles.btnText, color: theme.primary300}}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            ...styles.btnAction,
            backgroundColor: theme.bg300,
            elevation: shadows.thin,
          }}
          onPress={() => navigation.navigate('Register')}>
          <Text style={{...styles.btnText, color: theme.text200}}>
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
    paddingTop: spaces.medium,
  },
  image: {
    width: '100%',
    height: height / 2.5,
    marginBottom: spaces.medium,
  },
  textHeading: {
    ...sizes.text4xL,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: spaces.medium,
  },
  textSubHeading: {
    ...sizes.textSM,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: spaces.medium,
  },
  buttonWrapper: {
    flexDirection: 'row',
    columnGap: spaces.medium,
    width: '100%',
    paddingHorizontal: spaces.large,
    paddingTop: spaces.medium,
  },
  btnAction: {
    flex: 1,
    height: 55,
    justifyContent: 'center',
    borderRadius: radius.default,
  },
  btnText: {
    ...sizes.textXL,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
