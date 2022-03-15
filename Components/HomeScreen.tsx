/* eslint-disable prettier/prettier */
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Button, Image} from 'react-native';
import {Text} from 'react-native';
import {RootStackParamList} from '../App';
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

export const HomeScreen: React.FC<Props<'HomeScreen'>> = ({navigation}) => {
  return (
    <View>
       <View style={HeaderStyles.container}>
      <View style={HeaderStyles.topContainer}>
        <View style={HeaderStyles.metaContainer}>
          <View>
            <Text style={HeaderStyles.title}>Todo App</Text>
            <Text style={HeaderStyles.description}>Let's talk about avatar!</Text>
          </View>
        </View>
        <Image source={{
        uri: 'https://miro.medium.com/max/1838/1*WlqoZqYYFaM4F0Cy2DCcjA.png',
      }} style={HeaderStyles.image}/>
      </View>
    </View>
    <View style={HeaderStyles.HomeScreen}>
      <Text style={HeaderStyles.heading}>Welcome Todo App</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('UserRegistration')}
      />
    </View>
    </View>
  );
};

