import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import likeIcon from './assets/images/like.png';

const post = {
  id: 'p1',
  createdAt: '19 m',
  User: {
    id: 'u1',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
    name: 'Vadim Savin',
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  numberOfLikes: 11,
  numberOfShares: 2,
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.header}>
          <Image source={{uri: post.User.image}} style={styles.headerImage} />
          <View>
            <Text style={styles.headerName}>{post.User.name}</Text>
            <Text style={styles.headerTime}>{post.createdAt}</Text>
          </View>
          <View style={styles.headerIcon}>
            <Icon name="dots-horizontal" size={20} color="gray" />
          </View>
        </View>
        {post.description && (
          <Text style={styles.postDescription}>{post.description}</Text>
        )}
        {post.image && (
          <Image source={{uri: post.image}} style={styles.postImage} />
        )}
        <View style={styles.footer}>
          <View style={styles.statsRow}>
            <Image source={likeIcon} style={styles.likeIcon} />
            <Text
              style={
                styles.likedBy
              }>{`Wahyu and ${post.numberOfLikes} others`}</Text>
            <Text style={styles.shares}>{`${post.numberOfShares} shares`}</Text>
          </View>
          <View style={styles.bottomRow}>
            <Icon.Button
              name="thumb-up-outline"
              size={18}
              color="grey"
              backgroundColor="transparent">
              <Text style={{fontWeight: '500'}}>Like</Text>
            </Icon.Button>
            <Icon.Button
              name="comment-outline"
              size={18}
              color="grey"
              backgroundColor="transparent">
              <Text style={{fontWeight: '500'}}>Comment</Text>
            </Icon.Button>
            <Icon.Button
              name="share-outline"
              size={18}
              color="grey"
              backgroundColor="transparent">
              <Text style={{fontWeight: '500'}}>Share</Text>
            </Icon.Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: 'brown',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 10,
    marginBottom: 20,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
  headerName: {
    fontSize: 16,
    fontWeight: '500',
  },
  headerTime: {
    color: 'gray',
  },
  headerIcon: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    // backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  postDescription: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.3,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  footer: {},
  statsRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likedBy: {
    color: 'grey',
  },
  shares: {
    marginLeft: 'auto',
    color: 'grey',
  },
  bottomRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
