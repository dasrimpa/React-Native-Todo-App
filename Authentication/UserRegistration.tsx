import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View} from 'native-base';
import {Alert, Button, Image, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootStackParamList} from '../App';
import Api from './Api';
import HeaderStyles from '../Styles/HeaderStyles';
import UserStyles from '../Styles/UserStyles';

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

export const UserRegistration: React.FC<Props<'UserRegistration'>> = ({
  navigation,
}) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const doUserRegistration = async function (): Promise<boolean> {
    try {
      const response = await Api.post('/users', {
        username: username,
        password: password,
        email: email,
      });
      console.log(response);
      Alert.alert('successfully created!');
      navigation.navigate('TodoForm');
      return true;
    } catch (error: any) {
      Alert.alert(error.message);
      console.log(error);
      return false;
    }
  };

  return (
    <>
      <View style={HeaderStyles.container}>
        <View style={HeaderStyles.topContainer}>
          <View style={HeaderStyles.metaContainer}>
            <View>
              <Text style={HeaderStyles.title}>SignUp</Text>
              <Text style={HeaderStyles.description}>Create Your Account</Text>
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
            value={email}
            placeholder={'Email'}
            onChangeText={text => setEmail(text)}
            autoCapitalize={'none'}
          />
          <TextInput
            style={UserStyles.input}
            value={username}
            placeholder={'Username'}
            onChangeText={text => setUsername(text)}
            autoCapitalize={'none'}
          />
          <TextInput
            style={UserStyles.input}
            value={password}
            placeholder={'Password'}
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
          <View style={UserStyles.button}>
            <Button title={'Sign Up'} onPress={() => doUserRegistration()} />
          </View>
        </View>
      </View>
      <>
        <TouchableOpacity onPress={() => navigation.navigate('UserLogIn')}>
          <Text style={UserStyles.text}>
            {'Already have an account? '}
            <Text style={UserStyles.link}>{'Sign In'}</Text>
          </Text>
        </TouchableOpacity>
      </>
    </>
  );
};
