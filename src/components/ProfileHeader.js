import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LoadContent} from '.';

const dummy_img =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';
const bg = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg';

const profilePictureWidth = Dimensions.get('window').width * 0.4;

const ProfileHeader = ({user, isMe = false}) => {
  const navigation = useNavigation();

  const signup = async () => console.log('Logout');

  if (!user) {
    return <LoadContent message="Get profile information" />;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: bg}} style={styles.bg} />
      <Image source={{uri: user?.image || dummy_img}} style={styles.image} />

      <Text style={styles.name}>{user.name}</Text>

      {isMe && (
        <View style={styles.buttonsWrapper}>
          <Icon.Button
            name="plus"
            size={18}
            color="#fff"
            containerStyle={{flex: 1}}
            backgroundColor="royalblue"
            onPress={() => console.log('Plus')}>
            <Text style={{fontWeight: '500', color: '#fff'}}>Add to Story</Text>
          </Icon.Button>
          <Icon.Button
            name="account-edit"
            size={18}
            color="black"
            containerStyle={{flex: 1}}
            backgroundColor="gainsboro"
            onPress={() => console.log('Edit')}>
            <Text style={{fontWeight: '500', color: 'black'}}>
              Edit Profile
            </Text>
          </Icon.Button>
          <Icon.Button
            name="logout-variant"
            size={18}
            color="black"
            containerStyle={{flex: 1}}
            backgroundColor="gainsboro"
            iconStyle={{marginRight: 0}}
            onPress={signup}
          />
        </View>
      )}

      <View style={{...styles.textLine, marginTop: 10}}>
        <Icon name="school" size={20} color="gray" />
        <Text style={{color: '#333', marginLeft: 5}}>Graduated university</Text>
      </View>
      <View style={styles.textLine}>
        <Icon name="clock-time-three" size={20} color="gray" />
        <Text style={{color: '#333', marginLeft: 5}}>
          Joined on October 2023
        </Text>
      </View>
      <View style={styles.textLine}>
        <Icon name="map-marker" size={20} color="gray" />
        <Text style={{color: '#333', marginLeft: 5}}>From Indonesia</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
  },
  bg: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: -profilePictureWidth / 2,
  },
  image: {
    width: profilePictureWidth,
    aspectRatio: 1,
    borderRadius: 500,
    borderWidth: 5,
    borderColor: '#fff',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5,
  },
  buttonsWrapper: {
    width: '100%',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
  },
  textLine: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginVertical: 5,
  },
});
