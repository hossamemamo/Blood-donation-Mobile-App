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



const Welcome =({navigation})=>{
    const [hidePassword,setHidePassword]=useState(true);
    return(
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <WelcomeContainer>
                    <WelcomeImage resizeMode="cover" source={require('../assets/imgs/cover.jpg')}/>
                    <PageTitle Welcome={true}>welcome man</PageTitle>
                    <SubTitle Welcome={true}>hossam</SubTitle>
                    <SubTitle Welcome={true}>hossamemamhosk@gmail.com</SubTitle>

                <StyledFormArea>  
                    <Avatar resizeMode="cover" source={require('../assets/imgs/logo.jpg')}/>

                    <Line/>
                            <StyledButton onPress={()=>{navigation.navigate("Login")}}>
                            <ButtonText>
                                Log out
                            </ButtonText>
                        </StyledButton>
                        </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </StyledContainer>
    );
}


export default Welcome;