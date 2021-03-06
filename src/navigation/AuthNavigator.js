import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {Login, ForgotPassword, AddUser, DeleteUser} from '../screens';
const Stack = createStackNavigator();

const AuthNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: null,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="AddUser" component={AddUser} />
      <Stack.Screen name="DeleteUser" component={DeleteUser} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
