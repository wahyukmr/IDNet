import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {radius, shadows, sizes, spaces} from '../constants';
import {useTheme} from '../contexts/Theme';

const img =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';

const FeedPostHeader = ({isHome}) => {
  const {theme} = useTheme();
  const navigation = useNavigation();
  const isDarkTheme = theme.barStyle === 'dark-content';

  const profileNavigate = () => navigation.navigate('Profile');
  const createPostNavigate = () => navigation.navigate('Create Post');

  return (
    <View style={styles.feedHeader(theme, isHome)}>
      <TouchableOpacity onPress={profileNavigate}>
        <Image source={{uri: img}} style={styles.profileImage} />
      </TouchableOpacity>
      <TouchableHighlight
        underlayColor={isDarkTheme ? theme.primary300 : theme.bg100}
        onPress={createPostNavigate}
        style={styles.btnWrapper(theme, isDarkTheme)}>
        <Text
          style={{
            color: theme.text200,
            ...sizes.textBASE,
          }}>
          What's on your mind?
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default FeedPostHeader;

const styles = StyleSheet.create({
  feedHeader: (theme, isHome) => ({
    backgroundColor: theme.bg200,
    paddingHorizontal: spaces.medium - spaces.extraSmall,
    paddingVertical: spaces.extraSmall,
    marginBottom: isHome ? 0 : spaces.small,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: shadows.medium,
  }),
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    marginRight: spaces.small,
  },
  btnWrapper: (theme, isDarkTheme) => ({
    flex: 1,
    height: 35,
    backgroundColor: isDarkTheme ? theme.bg100 : theme.bg300,
    borderRadius: radius.default,
    paddingHorizontal: spaces.small,
    alignItems: 'flex-start',
    justifyContent: 'center',
  }),
});
