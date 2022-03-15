import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './Components/HomeScreen';
import {ListScreen} from './Components/ListScreen';
import {NativeBaseProvider} from 'native-base';
import {TodoForm} from './Components/TodoForm';
import {UserRegistration} from './Authentication/UserRegistration';
import {UserLogIn} from './Authentication/UserLogin';

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  HomeScreen: undefined;
  ListScreen: undefined;
  TodoForm: undefined;
  UserRegistration: undefined;
  UserLogIn: undefined;
};
const App: React.FC<RootStackParamList> = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="UserRegistration" component={UserRegistration} />
          <Stack.Screen name="UserLogIn" component={UserLogIn} />
          <Stack.Screen name="ListScreen" component={ListScreen} />
          <Stack.Screen name="TodoForm" component={TodoForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
console.log('All Ok');
export default App;
