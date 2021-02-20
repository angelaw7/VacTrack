import React, { Component } from 'react';
import { View, Text, StyleSheet , TextInput} from 'react-native';



const InputField = ({ children, label }) => (
  <View>
    <Text style={inputLabelStyle}>{label}</Text>
    {children}
  </View>
)

const AppInput = ({ children, value, onChange, ...props }) => (
  <InputField {...props}>
    <TextInput
      style={inputTextStyle}
      value={value}
      onChangeText={onChange}
      clearTextOnFocus='true'
    />
  </InputField>
)


const inputLabelStyle = {
  color: 'white',
  fontSize: 14
}

const inputTextStyle = {
  height: 60,
  width: 250,
  borderColor: 'rgba(0,0,0,0)',
  borderWidth: 1,
  borderBottomColor: 'white',
  color: 'white',
  fontSize: 22,
  marginBottom: 12
}

export default AppInput