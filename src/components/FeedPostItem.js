import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import likeIcon from '../assets/images/like.png';

const FeedPostItem = React.memo(({post}) => {
  const [isLiked, setIsLiked] = useState(false);

  const navigation = useNavigation();
  const profileNavigate = () =>
    navigation.navigate('Profile', {id: post.User.id});

  return (
    <View style={styles.postWrapper}>
      <View style={styles.header}>
        <Pressable onPress={profileNavigate} style={{flexDirection: 'row'}}>
          <Image source={{uri: post.User.image}} style={styles.headerProfile} />
          <View>
            <Text style={{fontSize: 16, lineHeight: 24, fontWeight: '500'}}>
              {post.User.name}
            </Text>
            <Text style={{color: 'gray'}}>{post.createdAt}</Text>
          </View>
        </Pressable>
        <View style={styles.headerIcon}>
          <Icon name="dots-horizontal" size={20} color="gray" />
        </View>
      </View>
      {post.description && (
        <Text style={styles.postDescription}>{post.description}</Text>
      )}
      {post.image && (
        <Image
          source={{uri: post.image}}
          style={{width: '100%', aspectRatio: 1}}
        />
      )}
      <>
        <View style={styles.statsRow}>
          <Image source={likeIcon} style={styles.likeIcon} />
          <Text
            style={{
              color: 'grey',
            }}>{`Wahyu and ${post.numberOfLikes} others`}</Text>
          <Text
            style={{
              marginLeft: 'auto',
              color: 'grey',
            }}>{`${post.numberOfShares} shares`}</Text>
        </View>
        <View style={styles.bottomRow}>
          <Icon.Button
            name="thumb-up-outline"
            size={18}
            color={isLiked ? 'royalblue' : 'grey'}
            backgroundColor="#fff"
            onPress={() => setIsLiked(!isLiked)}>
            <Text
              style={{
                fontWeight: '500',
                color: isLiked ? 'royalblue' : 'grey',
              }}>
              Like
            </Text>
          </Icon.Button>
          <Icon.Button
            name="comment-outline"
            size={18}
            color="grey"
            backgroundColor="#fff"
            onPress={() => setIsLiked(!isLiked)}>
            <Text style={{fontWeight: '500'}}>Comment</Text>
          </Icon.Button>
          <Icon.Button
            name="share-outline"
            size={18}
            color="grey"
            backgroundColor="#fff"
            onPress={() => setIsLiked(!isLiked)}>
            <Text style={{fontWeight: '500'}}>Share</Text>
          </Icon.Button>
        </View>
      </>
    </View>
  );
});

export default FeedPostItem;

const styles = StyleSheet.create({
  postWrapper: {
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerProfile: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
  headerIcon: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  postDescription: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.3,
    marginBottom: 10,
  },
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
  bottomRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
