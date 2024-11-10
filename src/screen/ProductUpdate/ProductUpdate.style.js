import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 340,
    height: 200,
    // marginBottom: 40,
    marginHorizontal: 10,
    backgroundColor: "#ff6",
  },

  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginBottom:10,
  },
  title:{
     display: 'flex',
     fontSize: 20,
     fontWeight: '700',
     marginBottom:10,
     justifyContent: 'center',
     position:'absolute',

  },
  button:{
    position:'relative',
  top: 40,
    flex: '1',
    marginVertical:10,
    left: 30,
    justifyContent: 'center ',
    alignItems:'center',
    color: 'white',
  }
});
