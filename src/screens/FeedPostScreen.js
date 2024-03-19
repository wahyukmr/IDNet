import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import posts from '../assets/data/posts.json';
import {FeedPost} from '../components';

const img =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';

const FeedPostScreen = () => {
  const navigation = useNavigation();

  const profileNavigate = () => navigation.navigate('Profile');
  const createPostNavigate = () => navigation.navigate('Create Post');
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <TouchableOpacity onPress={profileNavigate}>
            <Image source={{uri: img}} style={styles.profileImage} />
          </TouchableOpacity>
          <TouchableHighlight
            underlayColor="#f2f2f2"
            onPress={createPostNavigate}
            style={styles.btnWrapper}>
            <Text style={{color: 'grey', fontSize: 18}}>
              What's on your mind?
            </Text>
          </TouchableHighlight>
        </View>
      )}
    />
  );
};

export default FeedPostScreen;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingVertical: 15,
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
    height: 50,
    borderRadius: 50 / 2,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'lightgrey',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
