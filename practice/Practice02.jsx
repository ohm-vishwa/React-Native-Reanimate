// interpolate
// interpolateColor
// square ==> Circle

/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Practice02 = () => {
  const animation = useSharedValue(0);
  const [clicked, setClicked] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(animation.value, [0, 1], [100, 200]);
    const radius = interpolate(animation.value, [0, 1], [0, 100]);
    const backgroundColor = interpolateColor(
      animation.value,
      [0, 1],
      ['orange', 'purple'],
    );
    return {
      width: width,
      height: width,
      backgroundColor,
      borderRadius: radius,
    };
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={[
          {
            height: 100,
            width: 100,
            backgroundColor: 'orange',
          },
          animatedStyle,
        ]}></Animated.View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          width: 200,
          height: 50,
          marginTop: 20,
          justifyContent: 'center',
        }}
        onPress={() => {
          if (clicked) {
            animation.value = withTiming(1, {duration: 1000});
          } else {
            animation.value = withTiming(0, {duration: 1000});
          }
          setClicked(!clicked);
        }}>
        <Text style={{textAlign: 'center'}}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Practice02;
