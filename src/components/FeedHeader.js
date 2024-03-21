import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const img =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';

const FeedHeader = () => {
  const navigation = useNavigation();

  const profileNavigate = () => navigation.navigate('Profile');
  const createPostNavigate = () => navigation.navigate('Create Post');

  return (
    <View style={styles.feedHeader}>
      <TouchableOpacity onPress={profileNavigate}>
        <Image source={{uri: img}} style={styles.profileImage} />
      </TouchableOpacity>
      <TouchableHighlight
        underlayColor="#f2f2f2"
        onPress={createPostNavigate}
        style={styles.btnWrapper}>
        <Text style={{color: 'grey', fontSize: 18}}>What's on your mind?</Text>
      </TouchableHighlight>
    </View>
  );
};

export default FeedHeader;

const styles = StyleSheet.create({
  feedHeader: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
  btnWrapper: {
    flex: 1,
    height: 45,
    borderRadius: 50 / 2,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'lightgrey',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
