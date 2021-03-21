import React from 'react';
import { View , TouchableHighlight, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import AppText from './AppText'
export default function FamilyBlock(props, {ViewProfile}) {
  const navigation = useNavigation();

    return (
      <TouchableHighlight onPress={() => navigation.navigate('ViewProfile', {
        id: props.id,
        firstName: props.firstName,
        lastName: props.lastName,
        dob: props.dob,
        healthCard: props.healthCard,
        img: props.img,
        pastVaccinations: props.pastVaccinations,
        upcomingVaccinations: props.upcomingVaccinations
      })
        } underlayColor='white'
      style={{justifyContent:'center'}}>
        <View style={familyBlockStyle}>

        <Ionicons name="person-circle-outline" size={100} color="white" />

          <AppText textColor="white">{props.firstName}
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
