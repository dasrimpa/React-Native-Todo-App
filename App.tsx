import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './Components/HomeScreen';
import {ListScreen} from './Components/ListScreen';

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  HomeScreen: undefined;
  ListScreen: undefined;
};

const App: React.FC<RootStackParamList> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
console.log('All Ok');
export default App;
