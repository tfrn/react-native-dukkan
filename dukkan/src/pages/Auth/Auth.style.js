//react native
import { StyleSheet, Dimensions } from "react-native";

// dimensions
const deviceSize = Dimensions.get("window"); 

// StyleSheet
export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 20,
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 20,
      paddingHorizontal: 10,
    },
  });