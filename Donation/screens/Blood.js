import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, TextInput, FlatList, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// api client
import axios from 'axios';



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
       onPress={() => Request(item.id)}
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



const Request = async (id) => {
      console.log(id);
      const [email,setEmail]=useState('');
        try {
          const storedEmail = await AsyncStorage.getItem('email');        
          setEmail(storedEmail);
          console.log(storedEmail);

        } catch (error) {
          console.log('Error while retrieving email:', error);
        }




          axios.get('http://192.168.1.5:4000/request/request')
        .then((response) => {
          const { data, count } = response.data;
          console.log('Requests:', data);
          console.log('Count:', count);
        })
        .catch(error => {
          console.error('Error:');
        });




  try {
    const response = await axios.post('http://192.168.1.5:4000/request/request', {
      reqNum: count+1,
      bloodNum: id,
      email: email,
      state:"Pending",
    });
    console.log(response.data); 
    
  } catch (error) {
    console.log(error);
  }
};

const App = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedBloodType = await AsyncStorage.getItem('bloodType');
        const url1 = 'http://192.168.1.5:4000/blood/bloods';
        const bloodObject = {
          bloodType: storedBloodType
        };
        console.log(bloodObject);

        const response1 = await axios.post(url1,bloodObject);
        const { data, status } = response1.data;

        if (status === 'SUCCESS') {
          setTableData(data);
        } else {
          console.log('Error:', response1);
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