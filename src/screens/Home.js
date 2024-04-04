import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import posts from '../assets/data/posts.json';
import {FeedPostHeader, FeedPostItem} from '../components';
import {useTheme} from '../contexts/Theme';

const Home = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const {theme} = useTheme();
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const translateY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const currentOffset = event.contentOffset.y;
      const diff = currentOffset - lastContentOffset.value;

      if (diff > 0 && isScrolling.value) {
        translateY.value = withTiming(-currentOffset, {
          duration: 0,
          easing: Easing.out(Easing.circle),
        });
      }
      if (diff < 0 || currentOffset <= 0) {
        translateY.value = withTiming(0, {
          duration: 200,
          easing: Easing.ease,
        });
      }
      lastContentOffset.value = currentOffset;
    },
    onBeginDrag: () => (isScrolling.value = true),
    onEndDrag: () => (isScrolling.value = false),
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.bg100,
      }}>
      <Animated.View
        onLayout={e => {
          const {height} = e.nativeEvent.layout;
          setHeaderHeight(height);
        }}
        style={[styles.headerStyles, animatedHeaderStyle]}>
        <FeedPostHeader isHome={true} />
      </Animated.View>
      <Animated.FlatList
        data={posts}
        renderItem={({item}) => <FeedPostItem post={item} />}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        style={{paddingTop: headerHeight}}
        scrollEventThrottle={16}
        ListHeaderComponent={<View />}
        ListHeaderComponentStyle={{height: 8}}
      />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  headerStyles: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1000,
  },
});
