import React, { useState, useEffect, Component }from 'react';
import { Button, View, ScrollView} from 'react-native';

import FamilyBlock from './FamilyBlock'
import AppText from './AppText'
import { db } from '../config';

let memberRef = db.ref('/familyMembers');


export default class Home extends Component {

  state = {
    members: []
  }

  componentDidMount() {
    memberRef.on('value', snapshot => {
      let data = snapshot.val();
      let members = Object.values(data);
      this.setState({ members })
    })
  }
  

  render() {
    
    const familyNew = this.state.members.map(newMember => <FamilyBlock
      name={newMember.firstName}
    />)
    
    const viewProfileStyle = {
      width: 425,
      padding: 20,
      paddingLeft: 40,
      backgroundColor: '#DFDFDF',
    }
    

    return (
      <ScrollView>
        <Button
          title="Add Member"
          onPress={() =>
            this.props.navigation.navigate('AddMember')
          }
        />
       
       
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 40, marginBottom: 40, flexWrap: 'wrap' }}>
          
          {familyNew}
        </View>
        
        <View style={{ padding: 20 }}>
          <View style={viewProfileStyle}>
            <AppText>
              Upcoming Vaccinations
            </AppText>
          </View>

        </View>
      </ScrollView>
    )
  }
}