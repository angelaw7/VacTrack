import React from 'react';
import { View, Text , TextInput} from 'react-native';



const InputField = ({ children, label, labelColor }) => (
  <View>
    <Text style={{
      color: (labelColor ? labelColor : 'grey'), fontSize: 14
    }}>{label}</Text>
    {children}
  </View>
)

const AppInput = ({ children, value, onChange, textColor, ...props }) => (
  <InputField {...props}>
    <TextInput
      style={{height: 48,
        width: 280,
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        borderBottomColor: (textColor ? textColor : 'grey'),
        fontSize: 18,
        marginBottom: 16,
        color: (textColor ? textColor : 'grey')
        
      }}
      value={value}
      onChangeText={onChange}
    />
  </InputField>
)

const inputTextStyle = {
  height: 60,
  width: 250,
  borderColor: 'rgba(0,0,0,0)',
  borderWidth: 1,
  borderBottomColor: 'white',
  fontSize: 22,
  marginBottom: 12
}

export default AppInput