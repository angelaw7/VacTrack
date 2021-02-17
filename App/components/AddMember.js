import React, { Component, useState} from 'react';
import { Button, View, Text , Image} from 'react-native';


export default function AddMember({ route }) {

  return (
    <View style={{padding: 10}}>
      <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
        style={{ width: 200, height: 200, margin: 'auto'}}
      />

      <form>
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
        <input type="submit" value="Add Member"/>
      </form>
    </View>
  );

  
}
