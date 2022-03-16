/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { VStack, Center, Box, Heading, HStack, Text } from 'native-base';
import { View } from 'react-native';
import Api from '../Authentication/Api';

export const TodoForm = () => {

const [list, setList] = React.useState('');

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

  return <Center w="100%">
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
              </HStack>)}
          </VStack>
        </VStack>
      </Box>
    </Center>;
};
