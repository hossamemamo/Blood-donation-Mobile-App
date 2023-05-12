import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';


import{
    StyledContainer,
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Colors,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
}from '../components/styles.js';


const {brand,darklight,primary} = Colors;



const Welcome =({navigation,route})=>{
    const [hidePassword,setHidePassword]=useState(true);
    const {name,email}=route.params;
    return(
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <WelcomeContainer>
                    <WelcomeImage resizeMode="cover" source={require('../assets/imgs/f2.jpg')}/>
                    <PageTitle Welcome={true}>Welcome Back!</PageTitle>
                    <SubTitle Welcome={true}>{name||"user"}</SubTitle>

                <StyledFormArea>  
            

                    <Line/>
                            <StyledButton onPress={()=>{navigation.navigate("app")}}>
                            <ButtonText>
                                Continue
                            </ButtonText>
                        </StyledButton>
                        </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </StyledContainer>
    );
}


export default Welcome;