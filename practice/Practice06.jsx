// Swipe animation like gmail

/* eslint-disable react-native/no-inline-styles */

import {Image, Text, View} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const Practice06 = () => {
  const animation = useSharedValue(0);

  // Define the gesture
  const panGesture = Gesture.Pan()
    .onStart(() => {
      // Save the initial animation value
      animation.value = animation.value;
    })
    .onUpdate(event => {
      // Update the animation value as the gesture progresses
      animation.value = event.translationX;
    })
    .onEnd(() => {
      animation.value = withSpring(0);
    });

  // Animated style for the swiping effect
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animation.value}],
    };
  });
  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: Math.abs(animation.value) > 80 ? 80 : Math.abs(animation.value),
      height: Math.abs(animation.value) > 80 ? 80 : Math.abs(animation.value),
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={{
              backgroundColor: 'green',
              height: 100,
              width: '100%',
              elevation: 4,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 10,
            }}>
            <Animated.View
              style={[
                {
                  width: 14,
                  height: 14,
                  paddingHorizontal: 10,
                },
                iconAnimatedStyle,
              ]}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={require('../assets/images/inbox.png')}
                resizeMode="contain"
              />
            </Animated.View>
            <Animated.View
              style={[
                {
                  width: 14,
                  height: 14,
                  paddingHorizontal: 10,
                },
                iconAnimatedStyle,
              ]}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={require('../assets/images/inbox.png')}
                resizeMode="contain"
              />
            </Animated.View>
            <Animated.View
              style={[
                {
                  backgroundColor: '#ffffff',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  borderRadius: 10,
                  justifyContent: 'center',
                },
                animatedStyle,
              ]}>
              <View style={{flexDirection: 'row', gap: 10}}>
                <View
                  style={{
                    backgroundColor: 'brown',
                    width: 50,
                    height: 50,
                    marginLeft: 20,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 40,
                      fontWeight: '500',
                      color: 'white',
                    }}>
                    A
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: 20, fontWeight: '700'}}>
                    Ohm Vishwa
                  </Text>
                  <Text>Demo</Text>
                </View>
              </View>
            </Animated.View>
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

export default Practice06;
