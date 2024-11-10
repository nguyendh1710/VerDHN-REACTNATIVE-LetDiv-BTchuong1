import { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./float-button.style";
import { LinearGradient } from "expo-linear-gradient";

class FloatButton extends Component {
  render() {
    return (
     
      <TouchableOpacity style={styles.container} {...this.props}>
        <LinearGradient
          colors={["#1c7ed6", "#4dabf7"]}
          style={styles.linearContainer}
        >
          <Ionicons name="add" size={40} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>
      
    );
  }
}

export default FloatButton;
