import React, { Component }from 'react';
import { Text } from 'react-native';


const AppText = ({children, textColor, textSize}) => (

  <Text style={{
    fontSize: textSize ? textSize : 18,
    color: textColor ? textColor :'#6B6B6B',
    marginBottom:5
  }}>
    {children}
  </Text>
)





export default AppText