import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import user from '../assets/data/user.json';
import {FeedPost, ProfileHeader} from '../components';

const ProfileScreen = () => {
  const route = useRoute();
  console.log('User: ', route?.params?.id);

  return (
    <FlatList
      data={user.posts}
      renderItem={({item}) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <>
          <ProfileHeader user={user} isMe={true} />
          <Text style={styles.sectionTitle}>Posts</Text>
        </>
      )}
    />
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
});
