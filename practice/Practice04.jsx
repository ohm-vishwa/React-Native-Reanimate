// Instagram double tap implementation

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {ImageBackground, Image, View} from 'react-native';
import React, {useCallback} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';

const ImageComponent = Animated.createAnimatedComponent(Image);
const ViewComponent = Animated.createAnimatedComponent(View);
const Practice04 = () => {
  const scale = useSharedValue(0);

  const doubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(300, withSpring(0));
      }
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: Math.max(scale.value, 0)}],
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <TapGestureHandler
        maxDelayMs={250}
        numberOfTaps={2}
        onActivated={doubleTap}>
        <ViewComponent
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageBackground
            source={{
              uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/732/461/small_2x/night-time-scene-with-bright-full-moon-at-lake-vector.jpg',
            }}
            style={{
              width: '100%',
              height: 400,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ImageComponent
              source={require('../assets/images/heart.png')}
              style={[{width: 150, height: 150}, animatedStyle]}
            />
          </ImageBackground>
        </ViewComponent>
      </TapGestureHandler>
    </GestureHandlerRootView>
  );
};

export default Practice04;
