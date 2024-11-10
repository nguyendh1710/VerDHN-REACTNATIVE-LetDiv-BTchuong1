import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {styles} from './FloatButton.style';
import { LinearGradient } from 'expo-linear-gradient';



export default function FloatButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
      <LinearGradient
                colors={['#4c669f', '#3c5998', '#194f6a']}
                style={styles.gradient}
            >
        <Text>
          <Icon name="add" size={30} color="#000" />
        </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}
