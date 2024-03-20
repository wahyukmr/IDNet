import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import user from '../assets/data/user.json';
import {FeedHeader, FeedPost, ProfileHeader} from '../components';

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
          <View style={{marginTop: 10}}>
            <Text style={styles.sectionTitle}>Posts</Text>
            <FeedHeader />
          </View>
        </>
      )}
    />
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingHorizontal: 15,
  },
});
