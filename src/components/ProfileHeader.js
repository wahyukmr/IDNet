import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert, Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FeedHeader} from '.';

const dummy_img =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';
const bg = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg';

const profilePictureWidth = Dimensions.get('window').width * 0.4;

const ProfileHeader = ({user, isMe = false}) => {
  const navigation = useNavigation();

  const signup = async () => console.log('Logout');

  return user ? (
    <>
      <View style={styles.userDetail}>
        <Image source={{uri: bg}} style={styles.bg} />
        <Image source={{uri: user?.image || dummy_img}} style={styles.image} />

        <Text style={styles.name}>{user.name}</Text>

        {/* {isMe && ( */}
        <View style={styles.buttonsWrapper}>
          <Icon.Button
            name={isMe ? 'plus' : 'account-plus'}
            size={22}
            color="#fff"
            backgroundColor="royalblue"
            iconStyle={{marginRight: 5}}
            onPress={() => console.log('Plus')}>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>
              {isMe ? 'Add to Story' : 'Add to friend'}
            </Text>
          </Icon.Button>
          <Icon.Button
            name={isMe ? 'account-edit' : 'message-plus'}
            size={22}
            color="#333"
            backgroundColor="gainsboro"
            iconStyle={{marginRight: 5}}
            onPress={() => console.log('Edit')}>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#333'}}>
              {isMe ? 'Edit Profile' : 'Send Message'}
            </Text>
          </Icon.Button>
          <Icon.Button
            name={isMe ? 'logout-variant' : 'dots-vertical'}
            size={22}
            color="#333"
            backgroundColor="gainsboro"
            iconStyle={{marginRight: 0}}
            onPress={signup}
          />
        </View>
        {/* )} */}

        <View style={{...styles.textLine, paddingTop: 15}}>
          <Icon name="school" size={22} color="gray" />
          <Text style={styles.textDetails}>Graduated university</Text>
        </View>
        <View style={styles.textLine}>
          <Icon name="clock-time-three" size={22} color="gray" />
          <Text style={styles.textDetails}>Joined on October 2023</Text>
        </View>
        <View style={{...styles.textLine, paddingBottom: 10}}>
          <Icon name="map-marker" size={22} color="gray" />
          <Text style={styles.textDetails}>From Indonesia</Text>
        </View>
      </View>

      <View style={{marginTop: 10, marginBottom: !isMe ? 10 : null}}>
        <Text
          style={{...styles.sectionTitle, paddingBottom: !isMe ? 15 : null}}>
          Posts
        </Text>
        {isMe && <FeedHeader />}
      </View>
    </>
  ) : (
    Alert.alert('Error 404!', "Can't get user information from the server", [
      {
        text: 'Back',
        onPress: () => navigation.goBack(),
      },
    ])
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  userDetail: {
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
    marginBottom: 15,
  },
  buttonsWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
  },
  textLine: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginVertical: 5,
  },
  textDetails: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingHorizontal: 15,
  },
});
