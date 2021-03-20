import React from 'react';
import { View , Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import AppText from './AppText'
import { Ionicons } from '@expo/vector-icons';

export default function ViewProfile ({navigation, route}) {

  // const pVaccList = route.params.pastVaccinations
  // const pastVaccinationList = pVaccList.map(pastVaccine => 
  // <View style={{marginBottom:10}}>
  //   <AppText>
  //   {pastVaccine.name}
  // </AppText>
  //   <AppText textSize={16}>
  //   {pastVaccine.date}
  //   </AppText>
  //   </View>

  // )
  // const upcomingVaccinationsList = route.params.upcomingVaccinations
  // const upcomingVaccines = upcomingVaccinationsList.map(upcomingVaccine => 
  // <View style={{marginBottom:10}}>
  //   <AppText>
  //   {upcomingVaccine.name}
  // </AppText>
  //   <AppText textSize={16}>
  //   {upcomingVaccine.date}
  //   </AppText>
  //   </View>

  // )


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

          <AppText>Name: {route.params.name}</AppText>
          <AppText>Date of Birth: {route.params.dob}</AppText>

            <AppText>Health Card Number: {route.params.cardNum}</AppText>
        </View>

        <View style={viewProfileStyle}>
          <AppText>Upcoming Vaccinations</AppText>
        </View>
        
        
        {/* <View style={textStyle}>
          {upcomingVaccines}
        </View> */}
        </View>

        <View style={viewProfileStyle}>
          <AppText >Vaccination History</AppText>
        </View>

        {/* <View style={textStyle}>
          {pastVaccinationList}
      </View> */}
      
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