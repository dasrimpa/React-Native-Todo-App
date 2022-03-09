/* eslint-disable prettier/prettier */
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Button} from 'react-native';
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
    <View style={HeaderStyles.HomeScreen}>
      <Text style={HeaderStyles.heading}>Welcome Todo App</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('ListScreen')}
      />
    </View>
  );
};

