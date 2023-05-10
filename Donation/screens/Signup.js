import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
//formik
import {Formik,useFormikContext } from 'formik';

import {Octicons,Ionicons,Fontisto} from '@expo/vector-icons';
import { Button, View,TouchableOpacity ,TextInput,ActivityIndicator} from 'react-native';
import DateTimePickerModal  from "react-native-modal-datetime-picker";

// import DateTimePicker from '@react-native-community/datetimepicker';


import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
}from '../components/styles.js';
import styled from 'styled-components';

import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper.js';

const {brand,darklight,primary} = Colors;
// api client
import axios from 'axios';



const Signup =({navigation})=>{
    const [hidePassword,setHidePassword]=useState(true);
    const [show,setShow]=useState(false);
    const [date,setDate]=useState();

    const [message,setMessage]=useState();
    const [messageType,setMessageType]=useState();


    const handleSignup  = (credentials,{setSubmitting})=>{
        handleMessage(null);
        const url='http://192.168.1.2:3000/user/signup';
        axios.post(url,credentials)
        .then((response)=>{
            const result=response.data;
            const {message,status,data}=result;

            if(status !=='SUCCESS'){
                handleMessage(message,status);
            }
            else
            {
                navigation.navigate('Welcome',{...data});
            }
            setSubmitting(false);
        })
        .catch((error) =>{
            console.log(error.response);
            setSubmitting(false);
            handleMessage("AN error occurred. check your network and try again");
        });
    }

    const handleMessage=(message,type='FAILED')=>{
        setMessage(message);
        setMessageType(type);
    }








    const onChange =(selectedDate)=>{

        const currentDate=selectedDate;
        setDate(currentDate);


        hideDatePicker();
    };

    const showDatePicker = () =>{
        setShow(true);
    };

    const hideDatePicker = () =>{
        setShow(false);
    };

    return(
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/imgs/logo.jpg')}/>
                <PageTitle>shokni shokran</PageTitle>
                <SubTitle>Account Signup</SubTitle>

                <DateTimePickerModal
                            date={date}
                            isVisible={show}
                            mode="date"
                            onConfirm={onChange}
                            onCancel={hideDatePicker}
                            />

            

                <Formik 
        
                initialValues={{ name:'',email:'',birthday: '' ,password:'',confirmpassword:''}}
                
                onSubmit={(values,{setSubmitting})=>{
                    values={...values,birthday:date}
                    if(values.email =='' || values.password == ''|| values.confirmpassword == ''|| values.name == ''){
                        handleMessage('Please fill all the fields');
                        setSubmitting(false);
                    }
                    else if(values.password!=values.confirmpassword)
                    {
                        handleMessage("passwords don't match!");
                        setSubmitting(false);

                    }
                    else
                    {
                        handleSignup(values,{setSubmitting});
                    }
                }}

                >
                    {({handleChange,handleBlur,handleSubmit,values,isSubmitting})=> (<StyledFormArea>
                        <MyTextInput
                            label="full Name"
                            icon="person" 
                            placeholder="hossam doe"
                            placeholderTextColor={darklight}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}

                        />
                        <MyTextInput
                            label="Email address"
                            icon="mail" 
                            placeholder="example@abc.com"
                            placeholderTextColor={darklight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"

                        />
                        
                        <MyTextInput
                            label="Birthday"
                            icon="calendar" 
                            placeholder="YYYY - MM - DD"
                            placeholderTextColor={darklight}

                            onChangeText={handleChange('birthday')}
                            onBlur={handleBlur('birthday')}

                            value={date ? date.toLocaleDateString() : ''}


                            isDate={true}
                            editable={false}
                            showDatePicker={showDatePicker}
                        />




                        <MyTextInput
                            label="Password"
                            icon="lock" 
                            placeholder="* * * * * * * * * * * "
                            placeholderTextColor={darklight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />

                        <MyTextInput
                            label="Confirm Password"
                            icon="lock" 
                            placeholder="* * * * * * * * * * * "
                            placeholderTextColor={darklight}
                            onChangeText={handleChange('confirmpassword')}
                            onBlur={handleBlur('confirmpassword')}
                            value={values.confirmpassword}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />

                        <MsgBox type={messageType}>{message}</MsgBox>
                        {!isSubmitting && <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Sign Up
                            </ButtonText>
                        </StyledButton>}


                        {isSubmitting && <StyledButton>
                            <ActivityIndicator size="large" color={primary}/>
                        </StyledButton>}

                        <ExtraView>
                            <ExtraText>
                                Already have an account ? 
                            </ExtraText>
                            <TextLink onPress={()=>navigation.navigate("Login")}>
                                <TextLinkContent> Log in</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                        </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
       </KeyboardAvoidingWrapper>
    );
}

const MyTextInput = ({label,icon,isPassword,hidePassword,setHidePassword,isDate,showDatePicker,...props}) => {
    return (<View>
        <LeftIcon>
            <Octicons name={icon} size={30} color={brand}/>
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        
        {!isDate && <StyledTextInput {...props}/>}
        {isDate && <TouchableOpacity  onPress={showDatePicker}>
            
            <StyledTextInput pointerEvents='none' {...props}/>
            </TouchableOpacity>}


        {isPassword &&(
            <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                <Ionicons name = {hidePassword? 'md-eye-off' : 'md-eye'} size={30} color={darklight}/>
            </RightIcon>
        ) }
    </View>);
};

export default Signup;