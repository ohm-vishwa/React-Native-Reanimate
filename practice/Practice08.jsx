// Day night togle button animated style

/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */

import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Practice08 = () => {
  const animation = useSharedValue(0);
  const [currentMode, setCurrentMode] = useState('day');
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animation.value}],
    };
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: currentMode == 'day' ? 'white' : 'black',
      }}>
      <TouchableOpacity
        style={{
          width: 150,
          height: 50,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: currentMode == 'day' ? 'black' : 'white',
          justifyContent: 'center',
          //
        }}
        onPress={() => {
          if (animation.value == 0) {
            animation.value = withTiming(98, {duration: 500});
            setCurrentMode('night');
          } else {
            animation.value = withTiming(0, {duration: 500});
            setCurrentMode('day');
          }
        }}>
        <Animated.View
          style={[
            {
              width: 40,
              height: 40,
              borderRadius: 20,
              // borderWidth: 1,
              // borderColor: 'black',
              overflow: 'hidden',
              marginHorizontal: 5,
            },
            animatedStyle,
          ]}>
          <Animated.Image
            source={
              currentMode == 'day'
                ? require('../assets/images/day.png')
                : require('../assets/images/night.png')
            }
            style={{
              width: '100%',
              height: '100%',
              tintColor: currentMode == 'night' ? 'white' : null,
            }}
          />
          <Animated.Image
            source={
              currentMode == 'day'
                ? require('../assets/images/day.png')
                : require('../assets/images/night.png')
            }
            style={{
              width: '100%',
              height: '100%',
              tintColor: currentMode == 'night' ? 'white' : null,
            }}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default Practice08;
