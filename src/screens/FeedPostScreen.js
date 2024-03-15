import React from 'react';
import {FlatList} from 'react-native';
import posts from '../assets/data/posts.json';
import FeedPost from '../components/FeedPost';

export default function FeedPostScreen() {
  return (
    <FlatList data={posts} renderItem={({item}) => <FeedPost post={item} />} />
  );
}
