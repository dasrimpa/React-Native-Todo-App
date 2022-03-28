import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../App';
import HeaderStyles from '../Styles/HeaderStyles';
import UserStyles from '../Styles/UserStyles';
import Api from './Api';

type ScreenNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

type Props<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};

export const UserLogIn: React.FC<Props<'UserLogIn'>> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doUserLogIn = async function (): Promise<boolean> {
    // Note that these values come from state variables that we've declared before
    try {
      const response = await Api.post('/login', {
        password: password,
        username: username,
      });
      console.log('response', response);
      console.log('success');
      Alert.alert('successfully login!');
      navigation.navigate('TodoList');
      // To verify that this is in fact the current user, currentAsync can be used
      return true;
    } catch (error: any) {
      // Error can be caused by wrong parameters or lack of Internet connection
      Alert.alert('Error!', error.message);
      return false;
    }
  };

  return (
    <>
      <View style={HeaderStyles.container}>
        <View style={HeaderStyles.topContainer}>
          <View style={HeaderStyles.metaContainer}>
            <View>
              <Text style={HeaderStyles.title}>SignIn</Text>
              <Text style={HeaderStyles.description}>Login Your Account</Text>
            </View>
          </View>
          <Image
            source={{
              uri: 'https://miro.medium.com/max/1838/1*WlqoZqYYFaM4F0Cy2DCcjA.png',
            }}
            style={HeaderStyles.image}
          />
        </View>
      </View>
      <View style={UserStyles.InputContainer}>
        <View>
          <TextInput
            style={UserStyles.input}
            value={username}
            placeholder={'Username'}
            onChangeText={text => setUsername(text)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <TextInput
            style={UserStyles.input}
            value={password}
            placeholder={'Password'}
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
          <View style={UserStyles.button}>
            <Button title={'Sign In'} onPress={() => doUserLogIn()} />
          </View>
        </View>
      </View>
      <>
        <Text style={UserStyles.text}>{"Don't have an account? "}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserRegistration')}>
          <Text style={UserStyles.text}>
            <Text style={UserStyles.link}>{'Sign Up'}</Text>
          </Text>
        </TouchableOpacity>
      </>
    </>
  );
};
