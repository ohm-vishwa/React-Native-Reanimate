// slidebar animation

/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
// Animated Slidebar Flatlist

import {View, FlatList, Dimensions, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const Practice07 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={{flex: 1}}>
      <FlatList
        onScroll={e => {
          const X = e.nativeEvent.contentOffset.x;
          setCurrentIndex((X / Dimensions.get('window').width).toFixed(0));
        }}
        horizontal
        data={[
          require('../assets/images/silde1.png'),
          require('../assets/images/slide2.png'),
          require('../assets/images/slide3.png'),
        ]}
        renderItem={({item, index}) => (
          <SliderItem image={item} index={index} currentIndex={currentIndex} />
        )}
      />
    </View>
  );
};

const SliderItem = ({image, index, currentIndex}) => {
  const animation = useSharedValue(0);
  useEffect(() => {
    animation.value = currentIndex;
  }, [currentIndex]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animation.value == index ? withSpring(1.3) : withSpring(0.5)},
      ],
    };
  });
  return (
    <Animated.View
      style={[
        {
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          justifyContent: 'center',
          alignItems: 'center',
        },
        animatedStyle,
      ]}>
      <Image
        source={image}
        style={{width: '70%', height: '70%'}}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

export default Practice07;
