import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, TextInput, FlatList, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// api client
import axios from 'axios';
const Request = async () => {
  try {
    const response = await axios.post('http://192.168.1.2:4000/request/request', {
      email: "Joddkdk",
      name:"odj",
    });
    console.log(response.data); 
    
  } catch (error) {
    console.log(error);
  }
};


const Table = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', padding: 10 }}>
      <Text style={{ flex: 1 }}>{item.id}</Text>
      <Text style={{ flex: 1 }}>{item.date}</Text>
      <Text style={{ flex: 1 }}>{item.bloodType}</Text>
      <Text style={{ flex: 1 }}>{item.location}</Text>
      <Text style={{ flex: 1 }}>{item.number}</Text>
      <View style= {{flexDirection:'column'}}>
      <Button 
       onPress={() => Request()}
      title="Donate"
      color="green"
      accessibilityLabel="Learn more about this purple button"
      />
      </View>
    </View>
  );

  return (
    <View>
      <Text style = {{fontWeight:'bold', textAlign:'center', borderBottomWidth:1, borderBottomColor:'purple', paddingBottom:25, marginBottom:25}} >Emergency feed</Text>
      
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
      />
    </View>
  );
};

const App = () => {

  

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedBloodType = await AsyncStorage.getItem('bloodType');
        const url = 'http://192.168.1.2:4000/blood/bloods';
        const bloodObject = {
          bloodType: storedBloodType
        };
        console.log(bloodObject);

        const response = await axios.post(url,bloodObject);
        const { data, status } = response.data;

        if (status === 'SUCCESS') {
          setTableData(data);
        } else {
          console.log('Error:', response);
        }
      } catch (error) {
        console.log('An error occurred. Check your network and try again.');
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor:'white' }}>
      <Table data={tableData} />
    </View>
  );
};

export default App;