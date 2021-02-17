import React, { Component } from 'react';
import { Button, View, Text , TouchableHighlight, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function FamilyBlock(props, {ViewProfile}) {
  const navigation = useNavigation();

    return (
      <TouchableHighlight onPress={() => navigation.navigate('ViewProfile', {
        name: props.name,
        dob: props.dob,
        allergies: props.allergies,
        img: props.img
      })
        } underlayColor='white' style={{margin: '20px'}}>
        <View style={familyBlockStyle} >
        <Image source={props.img}
        style={{ width: 100, height: 100, margin: 'auto'}}
      />

          <Text style={ familyBlockText}>{props.name}</Text>
        </View>
      </TouchableHighlight>
    )
  
}


const familyBlockStyle = {
  justifyContent: 'center',
  backgroundColor: '#89BFFF',
  border: '1px solid #3D7BF4',
  borderRadius: 20,
  width: '200px',
  height: '200px',

}

const familyBlockText = {
  color: 'white',
  textAlign: 'center',
  marginBottom: '10px'
}