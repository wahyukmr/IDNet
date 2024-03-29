import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import users from '../assets/data/users.json';
import {FeedPostItem, ProfileHeader} from '../components';

const Profile = () => {
  const route = useRoute();

  const selectedUserId = route?.params?.id;
  const userDetails = users.filter(user => user.id === selectedUserId);

  return (
    <FlatList
      data={userDetails[0]?.posts}
      renderItem={({item}) => <FeedPostItem post={item} />}
      showsVerticalScrollIndicator={false}
      /*Todo: buat nilai property isMe jadi dynamic */
      ListHeaderComponent={<ProfileHeader user={userDetails[0]} isMe={true} />}
    />
  );
};

export default Profile;
