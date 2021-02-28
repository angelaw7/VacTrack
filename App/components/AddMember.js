import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons'

import AppInput from './InputField'

export default function AddMember({ navigation, route }) {

  const [firstName, onChangeFName] = React.useState('First Name');
  const [lastName, onChangeLName] = React.useState('Last Name');
  const [dob, onChangeDOB] = React.useState('Date of Birth');
  const [healthCard, onChangeHealthCard] = React.useState('Health Card #');

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
        onPress={() => navigation.navigate('Home')}
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