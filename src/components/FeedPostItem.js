import {useNavigation} from '@react-navigation/native';
import {MoreOrLess} from '@rntext/more-or-less';
import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import likeIcon from '../assets/images/like.png';
import {sizes, spaces} from '../constants';
import {useTheme} from '../contexts/Theme';

const FeedPostItem = React.memo(({post, viewableItems}) => {
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);
  const {theme} = useTheme();

  const profileNavigate = () =>
    navigation.navigate('Profile', {id: post.User.id});

  const viewableStyles = useAnimatedStyle(() => {
    const isVisible = viewableItems.value
      .filter(item => item.isViewable)
      .find(viewableItem => viewableItem.item.id === post.id);

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [{scale: withTiming(isVisible ? 1 : 0.7, {duration: 500})}],
    };
  });

  return (
    <Animated.View style={[styles.postWrapper(theme), viewableStyles]}>
      <View style={styles.header}>
        <Pressable onPress={profileNavigate} style={{flexDirection: 'row'}}>
          <Image source={{uri: post.User.image}} style={styles.headerProfile} />
          <View>
            <Text style={styles.headerName(theme)}>{post.User.name}</Text>
            <Text style={{color: theme.text200}}>{post.createdAt}</Text>
          </View>
        </Pressable>
        <View style={styles.headerIcon}>
          <Icon name="dots-horizontal" size={20} color={theme.text100} />
        </View>
      </View>
      {post.description && (
        <View style={{marginBottom: spaces.small}}>
          <MoreOrLess
            numberOfLines={2}
            textStyle={styles.postDesc(theme)}
            animated
            textButtonStyle={styles.btnMoreLess(theme)}>
            {post.description}
          </MoreOrLess>
        </View>
      )}
      {post.image && (
        <Image
          source={{uri: post.image}}
          style={{width: '100%', aspectRatio: 1}}
        />
      )}
      <View style={styles.statsRow(theme)}>
        <Image source={likeIcon} style={styles.likeIcon} />
        <Text
          style={{
            color: theme.text200,
            ...sizes.textXS,
          }}>{`Wahyu and ${post.numberOfLikes} others`}</Text>
        <Text
          style={{
            marginLeft: 'auto',
            color: theme.text200,
            ...sizes.textXS,
          }}>{`${post.numberOfShares} shares`}</Text>
      </View>
      <View style={styles.bottomRow}>
        <Icon.Button
          name="thumb-up-outline"
          size={18}
          backgroundColor={theme.bg200}
          iconStyle={{marginRight: spaces.extraSmall}}
          onPress={() => setIsLiked(!isLiked)}>
          <Text
            style={{
              fontWeight: '500',
              color: isLiked ? 'royalblue' : theme.text200,
            }}>
            Like
          </Text>
        </Icon.Button>
        <Icon.Button
          name="comment-outline"
          size={18}
          backgroundColor={theme.bg200}
          iconStyle={{marginRight: spaces.extraSmall}}
          onPress={() => setIsLiked(!isLiked)}>
          <Text style={{fontWeight: '500', color: theme.text200}}>Comment</Text>
        </Icon.Button>
        <Icon.Button
          name="share-outline"
          size={18}
          backgroundColor={theme.bg200}
          iconStyle={{marginRight: spaces.extraSmall}}
          onPress={() => setIsLiked(!isLiked)}>
          <Text style={{fontWeight: '500', color: theme.text200}}>Share</Text>
        </Icon.Button>
      </View>
    </Animated.View>
  );
});

export default FeedPostItem;

const styles = StyleSheet.create({
  postWrapper: theme => ({
    width: '100%',
    paddingTop: spaces.small,
    paddingHorizontal: spaces.small,
    marginBottom: spaces.extraSmall,
    backgroundColor: theme.bg200,
  }),
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spaces.small,
  },
  headerProfile: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: spaces.small,
  },
  headerName: theme => ({
    ...sizes.textBASE,
    color: theme.text100,
    fontWeight: '500',
  }),
  headerIcon: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  postDesc: theme => ({
    ...sizes.textSM,
    color: theme.text100,
    letterSpacing: 0.3,
  }),
  btnMoreLess: theme => ({
    color: theme.text200,
    ...sizes.textSM,
    fontWeight: '500',
  }),
  statsRow: theme => ({
    paddingVertical: spaces.small,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.hairLine,
  }),
  likeIcon: {
    width: 16,
    height: 16,
    marginRight: spaces.extraSmall,
  },
  bottomRow: {
    paddingVertical: spaces.extraSmall,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
