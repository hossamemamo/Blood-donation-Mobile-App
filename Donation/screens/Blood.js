import { StyleSheet, Text, View, Button } from 'react-native';

 const Blood = () => {
  return (
    <View style = {styles.headcontainer}>
    <View style = {styles.appcontainer}>
      <Text>Emergency Feed</Text>
    </View>
    <View style = {styles.inputcontainer}>
      <View style = {styles.item}>
      <Text style = {styles.text1}> ffffffii </Text>
      <Text style = {styles.text2}> ffffffii </Text>
      </View>
    </View>
    </View>

  );
}
export default Blood;

const styles = StyleSheet.create({
  
  headcontainer:{
    flex:1,
    paddingTop:65,
    paddingHorizontal:15,
  },

  appcontainer: {
    flex:1,
    justifycontent:'center',
    alignItems:'center',
    marginBottom:25,
    borderBottomWidth:1,
    borderBottomColor:'purple',
  },

  inputcontainer:{
    flex:10,
  }, 

   item:{
    margin:10,
    padding:8,
    borderRadius:15,
    marginEnd:1,
   },

   text1:{
    color:'white',
    backgroundColor:'green',
    margin:10,
    padding:15,
    borderRadius:10,
    marginEnd:5,
   },

   text2:{
    color:'white',
    backgroundColor:'red',
    margin:10,
    padding:15,
    borderRadius:10,
    marginEnd:5,
   },

});
