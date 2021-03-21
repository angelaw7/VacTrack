import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import AppText from './AppText';
import AppInput from './InputField'
import { db } from '../config'


export default function AddVaccination ({navigation}) {
  // const [vaccinationName, onChangeVaccinationName] = React.useState('Vaccination Name');
  // const [vaccinationDate, onChangeVaccinationDate] = React.useState('Date');
  
  
  const addVacSubmit = (vaccinationName,vaccinationDate) => {
    // const vaccinationData = {
    //   vaccinationName: vaccinationName,
    //   vaccinationDate: vaccinationDate
    // };

    // const member = db.ref('/familyMembers/-MWHHGseWDCW1HwH04yi')
    // let newVaccine = db.ref().child('vaccines').push().key;
    // let updates = {};
    // updates['/vaccines/' + newVaccine] = vaccinationData;
    // console.log(updates);
    // db.ref().update(updates);
    navigation.navigate('Home')
  }

    return (
      <ScrollView contentContainerStyle={styles.signUpStyle}>
        <View style={{marginBottom:30}}>

        </View>


        <AppInput
          label="VACCINATION NAME"
        value={vaccinationName}
        onChange={vaccinationName => onChangeVaccinationName(vaccinationName)} />
        <AppInput
        label="VACCINATION DATE"
        value={vaccinationDate}
          onChange={vaccinationDate => onChangeVaccinationDate(vaccinationDate)
          }
        />
       
      <Button
        title="Add Vaccination"
          onPress={() =>
            addVacSubmit()
          
        }
      />
      </ScrollView>
    )
}
const styles = StyleSheet.create({
  signUpStyle: {
    marginTop: 40,
    alignItems: 'center',
    height: 800
  }
})