import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

import{
    StyledContainer,
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    Avatar
}from '../components/styles.js';

import axios from 'axios';

const Account =({navigation})=>{
    const [email, setEmail] = useState('');
    const [name,setName] =useState('');
    const [birthday,setBirthday] =useState('');
    const [bloodType,setbloodType] =useState('');

    useEffect(() => {
      const getEmail = async () => {
        try {
          const storedEmail = await AsyncStorage.getItem('email');
          setEmail(storedEmail);
          const emailObject = {
            email: storedEmail
          };


          const url ='http://192.168.1.5:4000/user/info';
          axios.post(url,emailObject)
          .then(async (response) => {
            const result=response.data;
            const {message,status,data}=result;
            if(status=="SUCCESS")
            {
              setName(data[0].name);

              setbloodType(data[0].bloodType);

              try {
                await AsyncStorage.setItem('bloodType', data[0].bloodType);
              } catch (error) {
                console.log('Error while storing bloodType: ', error);
              }


              const date = new Date(data[0].birthday);
              const year = date.getFullYear();
              const month = String(date.getMonth() + 1).padStart(2, '0');
              const day = String(date.getDate()).padStart(2, '0');
              const formattedDate = `${year}-${month}-${day}`;
              setBirthday(formattedDate);

            }
          })
          .catch(error => {
            console.error(error);
          });
    
        

        } catch (error) {
          console.log('Error while retrieving email:', error);
        }

        
      };
          
      getEmail();


    }, []);
  
    return (

        <StyledContainer>
            <PageTitle Welcome={true}>account Info</PageTitle>
            <Avatar resizeMode="cover" source={require('../assets/imgs/logo.jpg')}/>
            <StatusBar style="dark" />
            <InnerContainer>
                    <SubTitle  Welcome={true}>E-mail:{email}</SubTitle>
                    <SubTitle  Welcome={true}>Name:{name}</SubTitle>
                    <SubTitle  Welcome={true}>bloodType:{bloodType}</SubTitle>
                    <SubTitle  Welcome={true}>birthday:{birthday}</SubTitle>

                <StyledFormArea>  
                    <Line/>
                    <StyledButton onPress={()=>{navigation.navigate("Login")}}>
                            <ButtonText>
                                Logout
                            </ButtonText>
                        </StyledButton>

                </StyledFormArea>
            </InnerContainer>
        </StyledContainer>

);
  }


export default Account;