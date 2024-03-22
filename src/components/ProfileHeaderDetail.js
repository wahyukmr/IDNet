import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileHeaderDetail = ({iconName, text}) => {
  return (
    <View style={styles.textLine}>
      <View style={styles.iconWrapper}>
        <Icon name={iconName} size={20} color="royalblue" />
      </View>
      <Text style={styles.textDetails}>{text}</Text>
    </View>
  );
};
export default ProfileHeaderDetail;

const styles = StyleSheet.create({
  textLine: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  iconWrapper: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d7ecff',
  },
  textDetails: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
});
