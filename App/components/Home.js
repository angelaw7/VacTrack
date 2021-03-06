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

  // useEffect(() => {
  //   memberRef.on('value', snapshot => {
  //     let data = snapshot.val();
  //     let familyMembers = Object.values(data);
  //     setFamilyMembers({familyMembers})
      
  // })
  //   })
  // put data here kinda in this format if possible
  

  render() {
    

    const sampleFamily = [
      {
        id: 1,
        name: "User 1",
        img: { uri: 'https://reactnative.dev/docs/assets/p_cat2.png' },
        dob: "07/07/2000",
        cardNum: '123456789',
        pastVaccinations: [
          {
            name: 'COVID Vaccine 1',
            date: 'Feb 27, 2021'
          },
          {
            name: 'Flu shot 1',
            date: 'Oct 21, 2020'
          }
        ],
        upcomingVaccinations: [
          {
            name: 'New vaccine',
            date: 'March 20, 2021'
          }
        ]
      },
      {
        id: 2,
        name: "User 2",
        img: { uri: 'https://www.freeiconspng.com/uploads/dog-icon-4.png' },
        dob: "04/09/2001",
        cardNum: '98865221',
        pastVaccinations: [
          {
            name: 'COVID Vaccine 2',
            date: 'Feb 21, 2021'
          },
          {
            name: 'Flu shot 2',
            date: 'April 21, 2020'
          }
        ],
        upcomingVaccinations: [
          {
            name: 'Another vaccine',
            date: 'May 17, 2021'
          }
        ]
      },
      {
        id: 3,
        name: "User 3",
        img: { uri: 'https://www.freeiconspng.com/uploads/turtle-icon-6.png' },
        dob: "01/09/2001",
        cardNum: '98865221',
        pastVaccinations: [
          {
            name: 'COVID Vaccine 3',
            date: 'Feb 13, 2021'
          },
          {
            name: 'Flu shot 3',
            date: 'Nov 21, 2020'
          }
        ],
        upcomingVaccinations: [
          {
            name: 'Another vaccine',
            date: 'May 17, 2021'
          }
        ]
      },

    
    ]


    const HomePageUpcomingVaccinations = sampleFamily.map(familyMember => (familyMember.pastVaccinations.map(vaccine => (
      <View style={{ marginBottom: 10 }}>

        <AppText>
          {familyMember.name}
        </AppText>
        <AppText textSize={14}>
          {vaccine.name} // {vaccine.date}
        </AppText>
      </View>
    ))
    ))

    const userFamily = sampleFamily.map(familyMember => <FamilyBlock
    
      id={familyMember.id}
      name={familyMember.name}
      img={familyMember.img}
      dob={familyMember.dob}
      cardNum={familyMember.cardNum}
      pastVaccinations={familyMember.pastVaccinations}
      upcomingVaccinations={familyMember.upcomingVaccinations}
    
    />)

    const familyNew = this.state.members.map(newMember => <FamilyBlock
      name={newMember.firstName}
      // dob={newMember.dob}
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

          {/* <View style={{ padding: 30 }}>
            
            {HomePageUpcomingVaccinations}
          </View> */}

        </View>
      </ScrollView>
    )
  }
}