import { StyleSheet, Text, View,Button,Platform } from 'react-native';




const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: Platform.OS === 'ios' ? 20 : 50,
    },
  });
  export default  styles;