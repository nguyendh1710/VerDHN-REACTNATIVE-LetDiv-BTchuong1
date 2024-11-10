import {
 
  Text,

  TouchableOpacity
} from "react-native";
import { Component } from "react";
import styles from "./primary-button.style";
class PrimaryButton extends Component {
  render() {
    const { children } = this.props;

    return (
      <TouchableOpacity styles={styles.container} onPress={this.props.onPress}>
        {typeof children === "string" ? (
          <Text style={styles.text}>{children}</Text>
        ) : (
          children
        )}

    
      </TouchableOpacity>
    );
  }
}
export default PrimaryButton;
