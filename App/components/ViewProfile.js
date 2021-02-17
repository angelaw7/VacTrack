import React, { Component } from 'react';
import { Button, View, Text , Image} from 'react-native';


export default function ViewProfile ({navigation, route}) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        
        <View>
          <Image source={route.params.img} style={{ width: 100, height: 100, margin: 'auto'}}/>
          <Text  style={viewProfileStyle}>Personal Information</Text>
          <Text>Name: {route.params.name}</Text>
          <Text>DOB: {route.params.dob}</Text>
          <Text>Allergies: {route.params.allergies}</Text>
        </View>
        <View>
          <Text>Upcoming Vaccinations</Text>
          <Text>Vaccination Name</Text>
        </View>
      </View>
    )
  
}


const viewProfileStyle = {
  backgroundColor: 'gray',
  width: '100%'
}