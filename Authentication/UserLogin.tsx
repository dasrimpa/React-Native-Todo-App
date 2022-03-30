import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Alert,
  AsyncStorage,
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
import {Controller, useForm} from 'react-hook-form';

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

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const doUserLogIn = async function () {
    // Note that these values come from state variables that we've declared before
    try {
      await Api.post('/login', {
        password: password,
        username: username,
      }).then(response => {
        const data = response.data;
        AsyncStorage.setItem('user', data);
        console.log('response', response);
        Alert.alert('successfully login!');
        navigation.navigate('TodoList');
        reset({username, password});
      });
    } catch (error: any) {
      // Error can be caused by wrong parameters or lack of Internet connection
      Alert.alert(error.message, 'Incorrect Username or Password');
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
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={UserStyles.input}
                value={value}
                placeholder={'Username'}
                onBlur={onBlur}
                // eslint-disable-next-line @typescript-eslint/no-shadow
                onChangeText={value => {
                  // eslint-disable-next-line no-sequences
                  onChange(value), setUsername(value);
                }}
                autoCapitalize={'none'}
              />
            )}
            name="username"
            rules={{
              required: true,
            }}
            defaultValue=""
          />
          {errors.username && (
            <Text style={UserStyles.error}>enter your username.</Text>
          )}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={UserStyles.input}
                value={value}
                placeholder={'Password'}
                secureTextEntry
                onBlur={onBlur}
                // eslint-disable-next-line @typescript-eslint/no-shadow
                onChangeText={value => {
                  // eslint-disable-next-line no-sequences
                  onChange(value), setPassword(value);
                }}
              />
            )}
            name="password"
            rules={{
              required: true,
            }}
            defaultValue=""
          />
          {errors.password && (
            <Text style={UserStyles.error}>enter your password.</Text>
          )}
          <View style={UserStyles.button}>
            <Button title={'Sign In'} onPress={handleSubmit(doUserLogIn)} />
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
