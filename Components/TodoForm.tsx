/* eslint-disable prettier/prettier */
import React from 'react';
import { VStack, Input, Center, Box, Heading, HStack, Icon, IconButton } from 'native-base';
import { Alert } from 'react-native';
import Api from '../Authentication/Api';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

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

export const TodoForm: React.FC<Props<'UserRegistration'>> = ({
  navigation,
}) => {
  const [inputValue, setInputValue] = React.useState('');

  const addItem = async (title: any) => {
    if (inputValue === '') {
      Alert.alert('Input is Empty');
    } else {
      try {
        const response = await Api.post('/classes/todo', {
          title: title,
        });
        console.log('response', response);
        console.log('success');
        Alert.alert('Added Successfully');
        navigation.navigate('TodoList');
        return true;
      } catch (error) {
        Alert.alert(`Error! ${error}`);
      }
    }
  };

  return <Center w="100%">
      <Box maxW="300" w="100%">
        <Heading mb="2" size="md" pt="20">
          Task Name
        </Heading>
        <VStack space={4}>
          <HStack>
            <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Add Task" />
            <IconButton borderRadius="sm" variant="solid" icon={<Icon name="plus" size="sm" color="warmGray.50" />} onPress={() => {
            addItem(inputValue);
            setInputValue('');
          }} />
          </HStack>
        </VStack>
      </Box>
    </Center>;
};
