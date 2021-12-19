import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {
  Home,
  Login,
  Marks,
  Profile,
  Registration,
  ChangePassword,
  ForgotPassword,
  GiveFeedBack,
} from '../screens';
import BottomTab from './BottomTab';
const Stack = createStackNavigator();

export default AppNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

        headerShown: null,
      }}>
      <Stack.Screen name="HomeScreen" component={BottomTab} />

      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="GiveFeedBack" component={GiveFeedBack} />
    </Stack.Navigator>
  );
};
