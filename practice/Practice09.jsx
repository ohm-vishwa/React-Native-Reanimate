// login animation

/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Practice09 = () => {
  const animation = useSharedValue(0);
  const [loading, setLoading] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value === 0
          ? withTiming(200, {duration: 500})
          : withTiming(50, {duration: 500}),
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          if (animation.value == 0) {
            animation.value = 1;
            setLoading(true);
          } else {
            animation.value = 0;
            setLoading(false);
          }
        }}>
        <Animated.View
          style={[
            {
              width: 200,
              height: 50,
              backgroundColor: 'purple',
              paddingVertical: 5,
              justifyContent: 'center',
              borderRadius: 25,
            },
            animatedStyle,
          ]}>
          {loading ? (
            <ActivityIndicator size={40} color="white" />
          ) : (
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 24,
                fontWeight: '600',
              }}>
              Login
            </Text>
          )}
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default Practice09;
