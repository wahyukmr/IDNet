import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {radius, shadows, sizes, spaces} from '../constants';
import {useTheme} from '../contexts/Theme';
import {useTextInputAnimation} from '../hooks';

const FormTextInput = ({secureTextEntry, label, error, ...otherProps}) => {
  const {theme} = useTheme();
  const {
    focused,
    visible,
    animatedFocus,
    animatedLabel,
    animatedError,
    bind,
    toggleVisibility,
  } = useTextInputAnimation();

  const labelStyle = useAnimatedStyle(() => ({
    transform: [{translateY: animatedLabel.value}],
    opacity: animatedFocus.value,
  }));

  const errorStyle = useAnimatedStyle(() => ({
    transform: [{translateY: animatedError.value}],
    opacity: focused ? 0 : 1,
  }));

  const eyeButtonStyle = useAnimatedStyle(() => ({
    transform: [{scale: withTiming(focused ? 1 : 0.6, {duration: 300})}],
  }));

  return (
    <View style={styles.container}>
      {focused === false && error !== null && (
        <Animated.Text style={[{...styles.label, color: 'red'}, errorStyle]}>
          {error ? error : 'Required'}
        </Animated.Text>
      )}
      <Animated.Text
        style={[{...styles.label, color: theme.text100}, labelStyle]}>
        {label}
      </Animated.Text>
      <TextInput
        {...bind}
        secureTextEntry={secureTextEntry && !visible}
        placeholder={focused ? otherProps.placeholderText : label}
        placeholderTextColor={theme.text200}
        autoCapitalize="none"
        style={[
          {...styles.input, backgroundColor: theme.bg300},
          focused && {
            ...styles.focusedInput,
            borderColor: theme.primary200,
            shadowColor: theme.primary200,
          },
        ]}
        {...otherProps}
      />
      {secureTextEntry && (
        <Pressable onPress={toggleVisibility} style={{padding: spaces.small}}>
          <Animated.View style={eyeButtonStyle}>
            <Icon
              name={visible ? 'eye' : 'eye-off'}
              size={22}
              color={!focused ? theme.primary200 : theme.text100}
            />
          </Animated.View>
        </Pressable>
      )}
    </View>
  );
};

export default FormTextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    position: 'absolute',
    left: 5,
    top: -5,
    ...sizes.textSM,
    fontWeight: '500',
  },
  input: {
    flex: 1,
    height: 60,
    ...sizes.textLG,
    paddingHorizontal: spaces.medium,
    borderRadius: radius.default,
    marginTop: spaces.medium,
    marginBottom: spaces.medium,
  },
  focusedInput: {
    borderWidth: 3,
    elevation: shadows.medium,
  },
});
