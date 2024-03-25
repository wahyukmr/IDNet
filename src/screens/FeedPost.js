import React from 'react';
import {FlatList} from 'react-native';
import posts from '../assets/data/posts.json';
import {FeedPostHeader, FeedPostItem} from '../components';

const FeedPost = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPostItem post={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <FeedPostHeader />}
    />
  );
};

export default FeedPost;
