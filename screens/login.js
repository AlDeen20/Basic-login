import React from 'react';
import { InnerContainer, StyledContainer, Logo, Title, SubTitle, StyledForm, StyledTextInput, StyledInputLabel, LeftIcon, Colors } from '../components/styles';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { View } from 'react-native';

import { Octicons } from '@expo/vector-icons';

const { brand, darkLight } = Colors;

function Login() {
  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <InnerContainer>
        <Logo resizeMode="cover" source={require('../assets/icon.png')} />
        <Title>Our App</Title>
        <SubTitle>Account login</SubTitle>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledForm>
              {/* Use myTextInput instead of TextInput */}
              <MyTextInput
                label="Email"
                icon="mail"
                placeholder="andy@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />

            <MyTextInput
                label="Password"
                icon="lock"
                placeholder="*******"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true} 
              />

            </StyledForm>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
}

const MyTextInput = ({ label, icon, ...props }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <LeftIcon>
          <Octicons name={icon} label={label} size={30} color={brand} />
        </LeftIcon>
        <View style={{ marginLeft: 8, width: '100%' }}>
          <StyledInputLabel>{label}</StyledInputLabel>
          <StyledTextInput {...props} />
        </View>
      </View>
    );
  };
  
  
  
  
  
  

export default Login;
