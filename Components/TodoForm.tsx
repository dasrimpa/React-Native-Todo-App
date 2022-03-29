/* eslint-disable prettier/prettier */
import React from 'react';
import { VStack, Input, Center, Box, Heading, HStack, IconButton } from 'native-base';
import { Alert, Image, Text, View } from 'react-native';
import Api from '../Authentication/Api';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import HeaderStyles from '../Styles/HeaderStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

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

  return <View>
    <View style={HeaderStyles.container}>
          <View style={HeaderStyles.topContainer}>
            <View style={HeaderStyles.metaContainer}>
              <View>
                <Text style={HeaderStyles.title}>TodoForm</Text>
                <Text style={HeaderStyles.description}>
                  Create Your Todo
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
  <Center>
      <Box style={HeaderStyles.TodoFormBox}>
        <Heading style={HeaderStyles.todoFormHeading}>
          Task Name
        </Heading>
        <VStack space={4}>
          <HStack>
            <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Add Task" />
            <IconButton variant="solid" icon={<Icon name="plus" style={HeaderStyles.todoFormIcon} />} onPress={() => {
            addItem(inputValue);
            setInputValue('');
          }} />
          </HStack>
        </VStack>
      </Box>
    </Center>
    </View>;
};

