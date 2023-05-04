import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
//formik
import {Formik} from 'formik';

import {Octicons,Ionicons,Fontisto} from '@expo/vector-icons';
import { Button, View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';


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


const {brand,darklight,primary} = Colors;



const Signup =()=>{
    const [hidePassword,setHidePassword]=useState(true);
    return(
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/imgs/logo.jpg')}/>
                <PageTitle>shokni shokran</PageTitle>
                <SubTitle>Account Signup</SubTitle>

            {
                show && (<DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onchange}
                />)
            }

                <Formik 
        
                initialValues={{ name:'',email:'',birthday:'',password:'',confirmpassword:''}}
                onSubmit={(values)=>{
                    console.log(values);
                }}
                >
                    {({handleChange,handleBlur,handleSubmit,values})=> (<StyledFormArea>
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
                            onChangeText={handleChange('DOB')}
                            onBlur={handleBlur('DOB')}
                            value={values.DOB}

                        />
                        <MyTextInput
                            label="Birthday"
                            icon="calendar" 
                            placeholder="YYYY - MM - DD"
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

                        <MyTextInput
                            label="Confirm Password"
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

                        <MsgBox>.....</MsgBox>
                        <StyledButton inPress={handleSubmit}>
                            <ButtonText>
                                Login
                            </ButtonText>
                        </StyledButton>
                        <Line/>

                        <ExtraView>
                            <ExtraText>
                                Already have an account ? 
                            </ExtraText>
                            <TextLink>
                                <TextLinkContent> Log in</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                        </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
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

export default Signup;