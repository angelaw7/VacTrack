import React from 'react';
import { Button, View, Text, TouchableHighlight} from 'react-native';


import FamilyBlock from './FamilyBlock'

export default function Home ({navigation}) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Add Member"
        onPress={() =>
          navigation.navigate('AddMember')
        }
        />
       
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <FamilyBlock
            name="bob" />
            <FamilyBlock
            name="cat"
            img={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
            dob="june"
          allergies="none"/>
          </View>
        <Text>
          Upcoming
      </Text>
      </View>
    )
  
}