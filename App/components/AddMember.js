import React from 'react';
import { Alert, Button, StyleSheet} from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons'

import uuid from 'react-uuid'
import AppInput from './InputField'
import { db } from '../config'

let pushAddMember = (firstName, lastName, dob, healthCard) => {
  db.ref('/familyMembers').push({
    
      id: uuid(),
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      healthCard: healthCard
    
  })
}

export default function AddMember({ navigation, route }) {

  const [firstName, onChangeFName] = React.useState('First Name');
  const [lastName, onChangeLName] = React.useState('Last Name');
  const [dob, onChangeDOB] = React.useState('Date of Birth');
  const [healthCard, onChangeHealthCard] = React.useState('Health Card #');


  const handleSubmit = () => {
    pushAddMember(firstName, lastName, dob, healthCard);
    Alert.alert("Member saved")
  }

  return (
    <ScrollView contentContainerStyle={styles.addMemberStyle}>
      <TouchableHighlight onPress={() => alert('Upload image')}>
        <Ionicons name='person-circle' size={150} color='#71ACF2'/>
      </TouchableHighlight>
    
        <AppInput
          label="FIRST NAME"
        value={firstName}
        onChange={firstName => onChangeFName(firstName)} />
        <AppInput
        label="LAST NAME"
        value={lastName}
          onChange={lastName => onChangeLName(lastName)
          }
        />
        <AppInput
          label="DATE OF BIRTH"
        value={dob}
        onChange={dob => onChangeDOB(dob)} />
        <AppInput
        label="HEALTH CARD NUMBER"
        value={healthCard}
          onChange={healthCard => onChangeHealthCard(healthCard)
          }
      />
      <Button
        title="Add Member"
        onPress={handleSubmit}
      />

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  addMemberStyle: {
    padding:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});