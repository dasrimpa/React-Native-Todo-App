/* eslint-disable prettier/prettier */
import React from 'react';
import { VStack, Input, Center, Box, Heading, HStack, Icon, IconButton, Text } from 'native-base';
import { View } from 'react-native';

export const TodoForm = () => {
  const instState = [{
    title: 'Task 1',
  }, {
    title: 'Task 2',
  }];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState('');

  const addItem = (title: string) => {
    setList([...list, {
      title: title,
    }]);
  };

  const handleDelete = (index: number) => {
    const temp = list.filter((_, itemI) => itemI !== index);
    setList(temp);
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
          <VStack space={2}>
            {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
                <View>
                  <Text mx="2">
                    {item.title}
                  </Text>
                </View>
                <IconButton size="30" colorScheme="trueGray" icon={<Icon name="glass" size="30" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
              </HStack>)}
          </VStack>
        </VStack>
      </Box>
    </Center>;
};
