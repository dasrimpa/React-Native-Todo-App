/* eslint-disable prettier/prettier */
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './App';
import { VStack, FormControl, Input, Center, Button } from 'native-base';

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

function BuildingAFormExample() {
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});

    const validate = () => {
      if (formData === undefined) {
        setErrors({ ...errors,
          name: 'Name is required',
        });
        return false;
      }

      return true;
    };

    const onSubmit = () => {
      validate() ? console.log('Submitted') : console.log('Validation Failed');
    };

    return (
    <VStack width="90%" mx="3" maxW="300px">
        <FormControl isRequired isInvalid={'name' in errors}>
          <FormControl.Label _text={{
          bold: true,
        }}>Task Name</FormControl.Label>
          <Input placeholder="enter your task" onChangeText={value => setData({ ...formData,
          name: value,
        })} />
          {'name' in errors ? <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : <FormControl.HelperText />}
        </FormControl>
        <Button onPress={onSubmit} mt="5" colorScheme="cyan">
          Add
        </Button>
      </VStack>
    );
  }

export const TodoForm: React.FC<Props<'TodoForm'>> = () => {
    return (
        <Center flex={1}>
        <BuildingAFormExample />
      </Center>
    );
  };
