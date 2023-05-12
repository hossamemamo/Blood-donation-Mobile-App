import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, TextInput, FlatList, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// api client
import axios from 'axios';



const Table = ({ data }) => {
  
    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', padding: 0 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ marginRight: 10, fontWeight: 'bold' }}>ReqNumber:</Text>
            <Text>{item.reqNum}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ marginRight: 10, fontWeight: 'bold' }}>BloodReq:</Text>
            <Text>{item.bloodNum}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ marginRight: 10, fontWeight: 'bold' }}>Email:</Text>
            <Text>{item.email}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ marginRight: 10, fontWeight: 'bold' }}>Status:</Text>
            <Text>{item.state}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
          </View>
        </View>
      );
    
      return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'purple',
          paddingBottom: 25,
          marginBottom: 25,
        }}
      >
        Donation history
      </Text>

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
    let storedEmail;

    useEffect(() => {
      const fetchData = async () => {

        try {
            storedEmail = await AsyncStorage.getItem('email');
            // console.log('Email:', storedEmail);
            // Handle the request logic here
          } catch (error) {
            console.log('Error while retrieving email:', error);
          }
      

        try {
          axios.get('http://192.168.1.2:4000/request/request')
          .then(async (response) => {
            const { data, status } = response.data;
            const filteredData = data.filter(entry => entry.email === storedEmail);

            setTableData(filteredData);
  
          })
          .catch(error => {
            console.error('Error:');
          });
      
    
        } catch (error) {
          console.log('An error occurred. Check your network and try again.');
        }
      };
  
      fetchData();
          // Refresh data every second
          const interval = setInterval(fetchData, 1000);
  
          // Cleanup function to clear the interval
          return () => {
            clearInterval(interval);
          };
      
      
    }, []);
  
    return (
      <View style={{ flex: 1, padding: 20, backgroundColor:'white' }}>
        <Table data={tableData} />
      </View>
    );
  };
  
export default App;