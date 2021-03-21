import React from 'react';
import { Button, View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AppText from './AppText';

import AppInput from './InputField'

export default function SignUp ({navigation}) {
  const [firstName, onChangeFName] = React.useState('First Name');
  const [lastName, onChangeLName] = React.useState('Last Name');
  const [username, onChangeUsername] = React.useState('Username');
  const [email, onChangeEmail] = React.useState('Username');
  const [address, onChangeAddress] = React.useState('Address');
  const [password, onChangePassword] = React.useState('Password');
  const [confirmPassword, onChangeCPassword] = React.useState('Confirm Password');

    return (
      <ScrollView contentContainerStyle={styles.signUpStyle}>
        <View style={{marginBottom:30}}>

        <AppText>Don't have an account? Sign up here!</AppText>
        </View>


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
        label="USERNAME"
        value={username}
          onChange={username => onChangeUsername(username)
          }
        />
        <AppInput
        label="EMAIL"
        value={email}
          onChange={email => onChangeEmail(email)
          }
        />
        <AppInput
        label="ADDRESS"
        value={address}
          onChange={address => onChangeAddress(address)
          }
        />
        <AppInput
        label="PASSWORD"
        value={password}
          onChange={password => onChangePassword(password)
          }
        />
        <AppInput
        label="CONFIRM PASSWORD"
        value={confirmPassword}
          onChange={confirmPassword => onChangeCPassword(confirmPassword)
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
  signUpStyle: {
    marginTop: 40,
    alignItems: 'center',
    height: 800
  }
})
