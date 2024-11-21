// dragable component (floating)

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const Practice03 = () => {
  // Shared values to track position
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  // Gesture handler to update position
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.startX = x.value;
      context.startY = y.value;
    },
    onActive: (event, context) => {
      x.value = context.startX + event.translationX;
      y.value = context.startY + event.translationY;
    },
    onEnd: () => {
      x.value = withSpring(0);
      y.value = withSpring(0); // Reset position on release
    },
  });

  // Animated style to apply movement
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  return (
    <GestureHandlerRootView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={[
              {
                width: 100,
                height: 100,
                backgroundColor: 'orange',
                borderRadius: 10,
              },
              animatedStyle,
            ]}
          />
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default Practice03;
