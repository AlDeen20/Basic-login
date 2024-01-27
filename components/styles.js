import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components";
// some constant sizes for different mobile screens
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;

// Colors
export const Colors = {
    primary: "#55a3ff",     // Light Blue
    secondary: "#2ecc71",   // Green
    tertiary: "#e67e22",    // Orange
    darkLight: "#7f8c8d",   // Grayish Blue
    brand: "#9b59b6",       // Purple
    accent: "#e74c3c",      // Red
    background: "#ecf0f1",  // Light Gray
    text: "#2c3e50",        // Dark Blue-Gray
  };
  

  

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${statusBarHeight + 10}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 250px;
  height: 200px;
`;

export const Title = styled.Text`
  font-size: 45px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  padding-top: 20px;
  color: ${tertiary};
`;

export const StyledForm=styled.View`
width:90%;
`;

export const StyledTextInput = styled.TextInput`
background-color: ${secondary};
padding: 15px;
padding-left: 35px; /* Adjusted padding to make room for the left icon */
padding-right: 55px;
border-radius: 5px;
font-size: 16px;
height: 60px;
margin-vertical: 3px;
margin-bottom: 10px;
color: ${tertiary};
`;


export const StyledInputLabel=styled.Text`

color:${tertiary};
font-size:13px;
text-align:left;

`;
export const LeftIcon=styled.View`
position: absolute;
left: 15px; /* Adjusted position to align with the padding */
align-items: center;
justify-content: center;
height: 100%;
`;

export const RightIcon=styled.TouchableOpacity`
left:15px;
top:38px;
postion:absolute;
z-index:1;
`;

export const StyledButton=styled.TouchableOpacity`
padding:15px;
background-color:${brand};
justify-content:center;
border-radius:5px;
margin-vertical:5px;
height:60px;

`;

export const ButtonText=styled.Text`
color:${primary};
font-size:16px;
`;