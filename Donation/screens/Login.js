import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
//formik
import {Formik} from 'formik';

import {Octicons,Ionicons,Fontisto} from '@expo/vector-icons';
import { Button, View,ActivityIndicator } from 'react-native';


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

import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper.js';
// api client
import axios from 'axios';

const {brand,darklight,primary} = Colors;



const Login =({navigation})=>{
    const [hidePassword,setHidePassword]=useState(true);
    const [message,setMessage]=useState();
    const [messageType,setMessageType]=useState();


const handleLogin  = (credentials,{setSubmitting})=>{
        handleMessage(null);
        const url='http://192.168.1.2:3000/user/signin';
        axios.post(url,credentials)
        .then((response)=>{
            const result=response.data;
            const {message,status,data}=result;

            if(status !=='SUCCESS'){
                handleMessage(message,status);
            }
            else
            {
                navigation.navigate('Welcome',{...data[0]});
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
    return(
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/imgs/logo.jpg')}/>
                <PageTitle>shokni shokran</PageTitle>
                <SubTitle>Account Login</SubTitle>
                <Formik 
        
                initialValues={{ email:'',password:''}}

                // onSubmit={(values)=>{
                //     console.log(values);
                //     navigation.navigate("Welcome");
                // }}


                onSubmit={(values,{setSubmitting})=>{
                    if(values.email =='' || values.password == ''){
                        handleMessage('Please fill all the fields');
                        setSubmitting(false);
                    }
                    else
                    {
                        handleLogin(values,{setSubmitting});
                    }
                }}
                >
                    {({handleChange,handleBlur,handleSubmit,values,isSubmitting})=> (<StyledFormArea>
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
                        <MsgBox type={messageType}>{message}</MsgBox>
                        {!isSubmitting && <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Login
                            </ButtonText>
                        </StyledButton>}


                        {isSubmitting && <StyledButton>
                            <ActivityIndicator size="large" color={primary}/>
                        </StyledButton>}

                        
                        <Line/>
                        <StyledButton google={true} onPress={handleSubmit}>
                            <Fontisto name="google" color={primary} size={25}/>
                            <ButtonText google={true}>
                                Sign in with Google
                            </ButtonText>
                        </StyledButton>

                        <ExtraView>
                            <ExtraText>
                                Don't have an account already?
                            </ExtraText>
                            <TextLink onPress={()=> navigation.navigate("Signup")}>
                                <TextLinkContent> Sign up</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                        </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
}

const MyTextInput = ({label,icon,isPassword,hidePassword,setHidePassword,...props}) => {
    return (<View>
        <LeftIcon>
            <Octicons name={icon} size={30} color={brand}/>
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props}/>
        {isPassword &&(
            <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                <Ionicons name = {hidePassword? 'md-eye-off' : 'md-eye'} size={30} color={darklight}/>
            </RightIcon>
        ) }
    </View>);
};

export default Login;