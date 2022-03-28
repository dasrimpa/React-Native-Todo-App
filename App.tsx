import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './Components/HomeScreen';
import {ListScreen} from './Components/ListScreen';
import {NativeBaseProvider} from 'native-base';
import {TodoForm} from './Components/TodoForm';
import {UserRegistration} from './Authentication/UserRegistration';
import {UserLogIn} from './Authentication/UserLogin';
import {TodoList} from './Components/TodoList';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {TodoReducer} from './Redux/TodoReducer';

const Stack = createStackNavigator<RootStackParamList>();
const store = createStore(TodoReducer);

export type RootStackParamList = {
  HomeScreen: undefined;
  ListScreen: undefined;
  TodoForm: undefined;
  UserRegistration: undefined;
  UserLogIn: undefined;
  TodoList: undefined;
};
const App: React.FC<RootStackParamList> = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
              name="UserRegistration"
              component={UserRegistration}
            />
            <Stack.Screen name="UserLogIn" component={UserLogIn} />
            <Stack.Screen name="ListScreen" component={ListScreen} />
            <Stack.Screen name="TodoForm" component={TodoForm} />
            <Stack.Screen name="TodoList" component={TodoList} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};
console.log('All Ok');
export default App;
