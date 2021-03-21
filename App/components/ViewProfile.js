import React from 'react';
import { View, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import AppText from './AppText'
import { Ionicons } from '@expo/vector-icons';

export default function ViewProfile ({navigation, route}) {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', width:400}}>
        <Ionicons name="person-circle-outline" size={150} color="#71ACF2" />
        {/* For future upload images */}
        {/* <Image source={route.params.img}
          style={{ width: 150, height: 150, margin: 'auto' , marginTop:20, marginBottom:20}} /> */}
        <View style={viewProfileStyle}>
          <AppText >Personal Information</AppText>
        </View>
        
          <View style={textStyle}>

          <AppText>Name: {route.params.firstName} {route.params.lastName}</AppText>
          <AppText>Date of Birth: {route.params.dob}</AppText>

            <AppText>Health Card Number: {route.params.healthCard}</AppText>
        </View>
        <Button
          title="Add Vaccination"
          onPress={() =>
            navigation.navigate('AddVaccination', {
              id: route.params.id,
              
            })
          }
        />

        <View style={viewProfileStyle}>
          <AppText>Upcoming Vaccinations</AppText>
        </View>
        <View style={textStyle}>
          <AppText>No upcoming vaccinations!</AppText>
        </View>
        <View style={viewProfileStyle}>
          <AppText >Vaccination History</AppText>
        </View>
        <View style={textStyle}>
          <AppText>Vaccine Name</AppText>
            <AppText>Vaccination Date</AppText>
        </View>
        </View>
    </ScrollView>
    )
  
}

const viewProfileStyle = {
  width: 425,
  padding: 20,
  paddingLeft:40,
  backgroundColor: '#DFDFDF',
}

const textStyle = {
  width: 400,
  padding: 30
}