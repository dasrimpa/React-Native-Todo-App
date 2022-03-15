/* eslint-disable prettier/prettier */
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import { DataTable } from 'react-native-paper';
import { View } from 'react-native';
import { Fab } from 'native-base';
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

export const ListScreen: React.FC<Props<'ListScreen'>> = ({navigation}) => {
    return (
      <View>
        {/* <VStack style={HeaderStyles.searchBar}>
        <Input placeholder="Search here...." width="100%" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<Icon name="Search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<Icon name="mic" />} />} />
      </VStack> */}
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
    <View style={HeaderStyles.addButton}>
    <Fab
    onPress={() => navigation.navigate('TodoForm')}>
           <Icon name="add" size={30} color="#900"/>
           </Fab>
           </View>
    </View>
    );
  };
