// Basic withSpring

/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const Practice01 = () => {
  const animation = useSharedValue(0);
  const [clicked, setClicked] = useState(false);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: animation.value,
        },
      ],
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
          marginTop: 30,
          justifyContent: 'center',
        }}
        onPress={() => {
          if (clicked) {
            animation.value = withSpring(1);
          } else {
            animation.value = withSpring(0.5);
          }
          setClicked(!clicked);
        }}>
        <Text style={{textAlign: 'center'}}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Practice01;
