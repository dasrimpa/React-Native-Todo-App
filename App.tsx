import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './Components/HomeScreen';
import {ListScreen} from './Components/ListScreen';
import {NativeBaseProvider} from 'native-base';
import {TodoForm} from './Components/TodoForm';

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  HomeScreen: undefined;
  ListScreen: undefined;
  TodoForm: undefined;
};

const App: React.FC<RootStackParamList> = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ListScreen" component={ListScreen} />
          <Stack.Screen name="TodoForm" component={TodoForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
console.log('All Ok');
export default App;
