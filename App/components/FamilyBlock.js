import React, { Component } from 'react';
import { Button, View, Text , TouchableHighlight, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppText from './AppText'
export default function FamilyBlock(props, {ViewProfile}) {
  const navigation = useNavigation();

    return (
      <TouchableHighlight onPress={() => navigation.navigate('ViewProfile', {
        id: props.id,
        name: props.name,
        dob: props.dob,
        cardNum: props.cardNum,
        img: props.img,
        pastVaccinations: props.pastVaccinations,
        upcomingVaccinations: props.upcomingVaccinations
      })
        } underlayColor='white'
      style={{justifyContent:'center'}}>
        <View style={familyBlockStyle}>
        <Image source={props.img}
        style={{ width: 100, height: 100, margin:'auto'}}
      />

          <AppText textColor="white">{props.name}
          </AppText>
        </View>
      </TouchableHighlight>
    )
  
}


const familyBlockStyle = {
  backgroundColor: '#89BFFF',
  borderRadius: 20,
  margin: 10,
  width: 150,
  height: 150,
  borderWidth: 1,
  borderColor: '#3D7BF4',
  justifyContent: 'center',
  alignItems: 'center'
}
