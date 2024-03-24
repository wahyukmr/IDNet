import React from 'react';
import {FlatList} from 'react-native';
import posts from '../assets/data/posts.json';
import {FeedHeader, FeedPost as FeedPostScreen} from '../components';

const FeedPostScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPostScreen post={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <FeedHeader />}
    />
  );
};

export default FeedPostScreen;
