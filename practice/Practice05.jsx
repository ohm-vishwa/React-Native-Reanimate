/* eslint-disable react-native/no-inline-styles */
import {View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../common/helper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Practice05 = () => {
  const animation = useSharedValue(0);
  const [closed, setClosed] = useState(true);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value == 1
          ? withTiming(350, {duration: 500})
          : withTiming(0, {duration: 500}),
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            width: 350,
            height: 50,
            backgroundColor: '#cccccc',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
          },
          animatedStyle,
        ]}>
        <TextInput
          style={{width: '88%'}}
          placeholder="search here..."
          placeholderTextColor={'#7e7373'}
        />
        <TouchableOpacity
          onPress={() => {
            if (animation.value == 1) {
              animation.value = 0;
              setClosed(true);
            } else {
              animation.value = 1;
              setClosed(false);
            }
          }}
          style={{width: 30, height: 30}}>
          {closed ? (
            <AntDesign name="search1" size={30} />
          ) : (
            <AntDesign name="close" size={30} />
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Practice05;
