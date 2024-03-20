import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import users from '../assets/data/users.json';
import {FeedPost, ProfileHeader} from '../components';

const ProfileScreen = () => {
  const route = useRoute();

  const userId = route?.params?.id;
  const userProfile = users.filter(user => user.id === userId);

  return (
    <FlatList
      data={userProfile[0]?.posts}
      renderItem={({item}) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<ProfileHeader user={userProfile[0]} isMe={true} />}
    />
  );
};

export default ProfileScreen;
