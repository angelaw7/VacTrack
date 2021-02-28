import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from './components/SignUp'
import HomeScreen from './components/Home'
import AddMember from './components/AddMember'
import ViewProfile from './components/ViewProfile'

import AppInput from './components/InputField'

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
          fontSize: 24
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
          options={{ title: 'Sign Up' }}
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

  const [username, onChangeUsername] = React.useState('Username');
  const [password, onChangePassword] = React.useState('Password');

  return (
    <View style={{backgroundColor:'#72A0F8', flex: 1, alignItems: 'center', color: 'white'}}>
      <Text style={{ color: 'white', fontSize: 64, marginTop: 60, marginBottom: 40}}>
        VacTrack
      </Text>
      
      <AppInput
        label="USERNAME"
        value={username}
        onChange={username => onChangeUsername(username)}
        textColor="white"
        labelColor="white"
      />
      <AppInput
        label="PASSWORD"
        value={password}
        onChange={password => onChangePassword(password)}
        textColor="white"
        labelColor="white"

      />
      <View style={{marginTop: 40}}>

      <Button
        title="Sign In"
        onPress={() =>
          navigation.navigate('Home', { name: 'Jane' })
        }
        />
      
      <Text style={{marginTop:20, color:'white'}}>Don't have an account?</Text>
      <Button
        title="Sign Up"
        onPress={() =>
          navigation.navigate('SignUp')
        }
        />

      </View>
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

const textStyle = {
  height: 60,
  width: 250,
  borderColor: 'rgba(0,0,0,0)',
  borderWidth: 1,
  borderBottomColor: 'white',
  color: 'white',
  fontSize: 24,
  marginBottom: 12
}

const labelStyle = {
  color: 'white',
  textAlign: 'left'
}