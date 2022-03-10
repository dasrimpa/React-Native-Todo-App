/* eslint-disable prettier/prettier */
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import { DataTable } from 'react-native-paper';
import { Button, View } from 'react-native';
import { VStack, Input, Icon } from 'native-base';

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

export const ListScreen: React.FC<Props<'ListScreen'>> = ({navigation}) => {
    return (
      <View>
        <VStack w="100%" space={5} alignSelf="center">
        <Input placeholder="Search here...." width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<Icon name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<Icon name="mic" />} />} />
      </VStack>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title numeric>Edit Todo</DataTable.Title>
        <DataTable.Title numeric>Remove Todo</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Task 1</DataTable.Cell>
        <DataTable.Cell numeric>677</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Task 2</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Task 3</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Task 4</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Task 5</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
    <Button
        title="Add an Item"
        onPress={() => navigation.navigate('TodoForm')}
      />
    </View>
    );
  };
