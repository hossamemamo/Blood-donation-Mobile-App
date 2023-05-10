import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';

// api client
import axios from 'axios';

const Table = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', padding: 10 }}>
      <Text style={{ flex: 1 }}>{item.date}</Text>
      <Text style={{ flex: 1 }}>{item.bloodType}</Text>
      <Text style={{ flex: 1 }}>{item.location}</Text>
      <Text style={{ flex: 1 }}>{item.number}</Text>
    </View>
  );

  return (
    <View>
      <View style={{ flexDirection: 'row', padding: 60 }}>
        <Text style={{ flex: 1, fontWeight: 'bold' }}>Date</Text>
        <Text style={{ flex: 1, fontWeight: 'bold' }}>Blood Type</Text>
        <Text style={{ flex: 1, fontWeight: 'bold' }}>Location</Text>
        <Text style={{ flex: 1, fontWeight: 'bold' }}>Number</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
      />
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
