import { StatusBar } from 'expo-status-bar';
import React, { Component }from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './components/SignUp'
import HomeScreen from './components/Home'
import AddMember from './components/AddMember'
import ViewProfile from './components/ViewProfile'

import './app.css'


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#72A0F8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: '24px'
          }
      }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerTintColor: '#72A0F8'}}

          />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Family' }}
        />
        <Stack.Screen
          name="AddMember"
          component={AddMember}
          options={{ title: 'Add Member' }}
        />
        <Stack.Screen
          name="ViewProfile"
          component={ViewProfile}
          options={{ title: 'View Profile' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



const Login = ({ navigation }) => {


  return (
    <View style={{backgroundColor:'#72A0F8', flex: 1, alignItems: 'center', color: 'white'}}>
      <Text style={{ fontSize: '60px', color: 'white', marginBottom:'30px'}}>
        VacTrack
      </Text>
      <form>
        <label>Email</label>
        <input name="username" placeholder="Username"/>
        <label>Password</label>
        <input name="password" placeholder="password123"/>
      </form>
      
      <Button
        title="Sign In"
        onPress={() =>
          navigation.navigate('Home', { name: 'Jane' })
        }
        
        />
      <Button
        title="Sign Up"
        onPress={() =>
          navigation.navigate('SignUp')
        }
        />
      <Button
        title="Add Member"
        onPress={() =>
          navigation.navigate('AddMember')
        }
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#71ACF2',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
