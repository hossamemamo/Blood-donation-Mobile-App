import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, TextInput, FlatList, Alert} from 'react-native';

// api client
import axios from 'axios';



const Table = ({ data }) => {
  const handleRequestConfirm = async (id) => {    
    const idObject = {
      reqNum: id,
      status:"Confirmed"
    };
axios.post('http://192.168.1.2:4000/request/status',idObject)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });


  };
  const handleRequestCancel = async (id) => {
    const idObject = {
      reqNum: id,
      status:"Cancelled"
    };
axios.post('http://192.168.1.2:4000/request/status',idObject)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });



  };


  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', padding: 0 }}>
      <Text style={{ flex: 1,marginRight: 10}}>{item.reqNum}</Text>
      <Text style={{ flex: 1,marginRight: 10 }}>{item.bloodNum}</Text>
      <Text style={{ flex: 1,marginRight: 10 }}>{item.email}</Text>
      <Text style={{ flex: 1,marginRight: 10 }}>{item.state}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button
          onPress={() => handleRequestConfirm(item.reqNum)}
          title="Confirm"
          color="green"
          accessibilityLabel="Learn more about this button"
        />
          <Button
          onPress={() => handleRequestCancel(item.reqNum)}
          title="Cancel"
          color="red"
          accessibilityLabel="Learn more about this button"
        />

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
          paddingTop:50,
          paddingBottom: 25,
          marginBottom: 25,
        }}
      >
        Donation requests
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get('http://192.168.1.2:4000/request/request')
        .then(async (response) => {
          const { data, status } = response.data;
          // console.log('Requests:', data);
          setTableData(data);

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