import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FormTextInput} from '.';
import {radius, shadows, sizes, spaces} from '../constants';
import {useTheme} from '../contexts/Theme';
import {useForm} from '../hooks';

const AuthForm = ({isLogin}) => {
  const initialValues = isLogin
    ? {email: '', password: ''}
    : {email: '', password: '', confirmPassword: ''};
  const {inputValues, handleChange, errorMsg, validForm} =
    useForm(initialValues);
  const {theme} = useTheme();

  const navigation = useNavigation();

  const navigationAction = () =>
    navigation.navigate(isLogin ? 'Register' : 'Login');

  const validFormCondition = isLogin
    ? validForm
    : validForm &&
      inputValues.confirmPassword &&
      errorMsg.confirmPassword === null;

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: theme.bg100}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: spaces.extraLarge}}
        keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Text style={styles.textHeading(theme)}>
            {isLogin ? 'Login here' : 'Create Account'}
          </Text>
          <Text style={styles.textSubHeading(theme)}>
            {isLogin
              ? 'Reconnect with your circle, share your story'
              : 'Register and start sharing your moments'}
          </Text>
          <View style={{marginTop: spaces.large}}>
            <FormTextInput
              label="Email"
              placeholderText="Enter your email address"
              keyboardType="email-address"
              autoCompleteType="email"
              returnKeyType="next"
              onChangeText={text => handleChange('email', text)}
              error={errorMsg.email}
              value={inputValues.email}
            />
            <FormTextInput
              label="Password"
              placeholderText="Enter your password"
              secureTextEntry={true}
              autoCompleteType="password"
              returnKeyType="done"
              onChangeText={text => handleChange('password', text)}
              error={errorMsg.password}
              value={inputValues.password}
            />
            {!isLogin && (
              <FormTextInput
                label="Confirm Password"
                placeholderText="Confirm your password"
                secureTextEntry={true}
                autoCompleteType="password"
                returnKeyType="done"
                onChangeText={text => handleChange('confirmPassword', text)}
                error={errorMsg.confirmPassword}
                value={inputValues.confirmPassword}
              />
            )}
          </View>
          {isLogin && (
            <Text
              style={{
                ...styles.textOptions,
                color: theme.text200,
                alignSelf: 'flex-end',
              }}>
              Forgot your password?
            </Text>
          )}
          <TouchableNativeFeedback
            useForeground
            disabled={!validFormCondition}
            onPress={() => console.log('submit')}>
            <View style={styles.btnAction(theme, validForm)}>
              <Text style={styles.btnText(theme, validForm)}>
                {isLogin ? 'Sign in' : 'Sign up'}
              </Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableOpacity activeOpacity={0.7} onPress={navigationAction}>
            <Text style={{...styles.textOptions, color: theme.text200}}>
              {isLogin ? 'Create new account' : 'Already have an account'}{' '}
              <Icon name="open-in-new" size={16} />
            </Text>
          </TouchableOpacity>

          <View style={{marginTop: spaces.large}}>
            <Text style={{textAlign: 'center', color: theme.text200}}>
              Or continue with:
            </Text>
            <View style={styles.btnIconWrapper}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btnIcon(theme)}
                onPress={() => navigation.navigate('Home')}>
                <Icon name="google" size={28} color={theme.primary100} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btnIcon(theme)}
                onPress={() => navigation.navigate('Register')}>
                <Icon name="facebook" size={28} color={theme.primary100} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: spaces.medium,
    paddingTop: spaces.medium,
  },
  textHeading: theme => ({
    ...sizes.text4xL,
    fontWeight: '700',
    color: theme.primary100,
    marginTop: spaces.medium,
    marginBottom: spaces.small,
  }),
  textSubHeading: theme => ({
    ...sizes.textLG,
    fontWeight: '500',
    color: theme.text200,
    maxWidth: '70%',
    textAlign: 'center',
    marginBottom: spaces.small,
  }),
  btnAction: (theme, action) => ({
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: action ? theme.primary100 : theme.bg300,
    borderRadius: radius.default,
    marginTop: spaces.large,
    marginBottom: spaces.medium,
    elevation: shadows.thin,
    overflow: 'hidden',
  }),
  btnText: (theme, action) => ({
    ...sizes.textXL,
    fontWeight: '600',
    color: action ? theme.primary300 : theme.primary200,
  }),
  textOptions: {
    ...sizes.textSM,
    fontWeight: '500',
    textAlign: 'center',
  },
  btnIconWrapper: {
    marginTop: spaces.small,
    flexDirection: 'row',
    columnGap: spaces.medium,
    width: '40%',
  },
  btnIcon: theme => ({
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.bg300,
    borderRadius: radius.default,
  }),
});
