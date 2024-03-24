import React from 'react';
import {FlatList} from 'react-native';
import posts from '../assets/data/posts.json';
import {FeedHeader, FeedPost} from '../components';

const FeedPost = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <FeedHeader />}
    />
  );
};

export default FeedPost;
