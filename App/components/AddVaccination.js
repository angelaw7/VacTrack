import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import AppText from './AppText';
import AppInput from './InputField'



export default function AddVaccination ({navigation}) {
  const [vaccinationName, onChangeVaccinationName] = React.useState('Vaccination Name');
  const [vaccinationDate, onChangeVaccinationDate] = React.useState('Date');


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
        title="Sign Up"
        onPress={() =>
          navigation.navigate('Home')
        }
      />

      </ScrollView>
    )
  
}

const styles = StyleSheet.create({

})
