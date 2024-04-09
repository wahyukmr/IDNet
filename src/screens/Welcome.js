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
    <View style={styles.container(theme)}>
      <Animated.Image
        entering={FadeInUp.delay(200).duration(500)}
        source={require('../assets/images/welcome-image.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={{paddingHorizontal: spaces.large, paddingTop: spaces.large}}>
        <Text style={styles.textHeading(theme)}>Welcome to IDNet!</Text>
        <Text style={{...styles.textSubHeading, color: theme.text200}}>
          Connect, share, and create with friends and family. Join the IDNet
          community today and start your social media journey with us!
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnPrimary(theme)}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{...styles.btnText, color: theme.bg200}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnSecondary}
          onPress={() => navigation.navigate('Register')}>
          <View style={styles.innerBorder(theme)}>
            <Text
              style={{
                ...styles.btnText,
                color: theme.primary100,
              }}>
              Register
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: theme => ({
    flex: 1,
    backgroundColor: theme.bg100,
    alignItems: 'center',
    paddingTop: spaces.medium,
  }),
  image: {
    width: '100%',
    height: height / 2.5,
    marginBottom: spaces.medium,
  },
  textHeading: theme => ({
    ...sizes.text4xL,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.primary100,
    marginBottom: spaces.medium,
  }),
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
  btnPrimary: theme => ({
    flex: 1,
    height: 55,
    justifyContent: 'center',
    borderRadius: radius.default,
    backgroundColor: theme.primary100,
    shadowColor: theme.primary100,
    elevation: shadows.thin,
  }),
  btnSecondary: {
    flex: 1,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  innerBorder: theme => ({
    height: 55,
    borderWidth: 2,
    borderColor: theme.primary100,
    borderRadius: radius.default,
    justifyContent: 'center',
  }),
  btnText: {
    ...sizes.textXL,
    fontWeight: '600',
    textAlign: 'center',
  },
});
