import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
  Image,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {RouteProp} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import UserStyles from '../Styles/UserStyles';
import Api from './Api';
import HeaderStyles from '../Styles/HeaderStyles';

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
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const onSubmit = async function () {
    try {
      await Api.post('/users', {
        username: username,
        password: password,
        email: email,
      }).then(response => {
        console.log(response);
        Alert.alert('successfully created!');
        navigation.navigate('TodoList');
        reset({username, email, password});
      });
    } catch (error: any) {
      Alert.alert(error.message, 'Account already exists for this username.');
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <View style={HeaderStyles.container}>
          <View style={HeaderStyles.topContainer}>
            <View style={HeaderStyles.metaContainer}>
              <View>
                <Text style={HeaderStyles.title}>SignUp</Text>
                <Text style={HeaderStyles.description}>
                  Create Your Account
                </Text>
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
                  onBlur={onBlur}
                  // eslint-disable-next-line @typescript-eslint/no-shadow
                  onChangeText={value => {
                    // eslint-disable-next-line no-sequences
                    onChange(value), setEmail(value);
                  }}
                  value={value}
                  placeholder={'Email'}
                />
              )}
              name="email"
              rules={{
                required: true,
                pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
              }}
              defaultValue=""
            />
            {errors.email?.type === 'required' && (
              <Text style={UserStyles.error}>Email is required.</Text>
            )}

            {errors.email?.type === 'pattern' && (
              <Text>pattern should be like itobuz@xyz.com</Text>
            )}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={UserStyles.input}
                  onBlur={onBlur}
                  // eslint-disable-next-line @typescript-eslint/no-shadow
                  onChangeText={value => {
                    // eslint-disable-next-line no-sequences
                    onChange(value), setUsername(value);
                  }}
                  value={value}
                  placeholder={'Username'}
                />
              )}
              name="username"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.username && (
              <Text style={UserStyles.error}>Username is required.</Text>
            )}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={UserStyles.input}
                  onBlur={onBlur}
                  // eslint-disable-next-line @typescript-eslint/no-shadow
                  onChangeText={value => {
                    // eslint-disable-next-line no-sequences
                    onChange(value), setPassword(value);
                  }}
                  value={value}
                  placeholder={'Password'}
                />
              )}
              name="password"
              rules={{required: true, minLength: 5}}
              defaultValue=""
            />
            {errors.password?.type === 'required' && (
              <Text style={UserStyles.error}>Password is required.</Text>
            )}

            {errors.password?.type === 'minLength' && (
              <Text>Minimum 5 characters are required</Text>
            )}
          </View>
          <View style={UserStyles.button}>
            <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
        <Text style={UserStyles.text}>{'Already have an account? '}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('UserLogIn')}>
          <Text style={UserStyles.text}>
            <Text style={UserStyles.link}>{'Sign In'}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
