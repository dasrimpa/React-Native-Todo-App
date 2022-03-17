/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Center, Box, Heading, HStack, Text, View, VStack, Fab, IconButton, Image } from 'native-base';
import Api from '../Authentication/Api';
import { Todo } from '../Authentication/Interface/types';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RootStackParamList } from '../App';
import { RouteProp } from '@react-navigation/native';
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

export const TodoList: React.FC<Props<'TodoList'>> = ({navigation}) => {

  const [list, setList] = React.useState<Todo[]>([]);

  async function fetchData() {
    try {
      const response = await Api.get('/classes/todo');
      console.log(response.data.results);
      console.log('success');
      const result = response.data.results;
      setList(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


const deleteTodo = async (objectId: string) => {

  try {
  await Api.delete(`/classes/todo/${objectId}`);
  const filteredItems = list.filter((todo => todo.objectId !== objectId));
  setList(filteredItems);
  }
  catch (error) {
    console.log(error);
  }
};

  return <View>
    <View style={HeaderStyles.container}>
          <View style={HeaderStyles.topContainer}>
            <View style={HeaderStyles.metaContainer}>
              <View>
                <Text style={HeaderStyles.title}>TodoList</Text>
                <Text style={HeaderStyles.description}>
                  TodoList here
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
  <Center w="100%">
      <Box maxW="300" w="100%">
        <Heading mb="2" size="md" pt="20">
          Task Name
        </Heading>
        <VStack space={4}>
          <VStack space={2}>
            {list.map((item: any) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.objectId}>
                <View>
                  <Text mx="2">
                    {item.title}
                  </Text>
                </View>
                <IconButton size="sm" colorScheme="trueGray" icon={<Icon name="trash" color="trueGray.400" />} onPress={() => deleteTodo(item.objectId)} />
                <View>
                <IconButton size="sm" colorScheme="trueGray" icon={<Icon name="edit" color="trueGray.400" />}   onPress={() => navigation.navigate('TodoForm')} />
                </View>
              </HStack>)}
          </VStack>
        </VStack>
      </Box>
    </Center>
    <Fab
     onPress={() => navigation.navigate('TodoForm')}
  >
      <IconButton size="sm" colorScheme="trueGray" icon={<Icon name="plus" color="trueGray.400" />} />
  </Fab>
    </View>;
};
