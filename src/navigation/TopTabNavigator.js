import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Attandance, Marks, Registration} from '../screens';
import {StyleSheet} from 'react-native';
import {colors, fonts} from '../constants';
const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: colors.primary, padding: 10},
        tabBarIndicatorStyle: {
          backgroundColor: colors.white,
          padding: 4,
          borderRadius: 5,
        },
        tabBarLabelStyle: {
          ...fonts.marksText,
          color: colors.white,
        },
      }}>
      <Tab.Screen
        name="Marks"
        component={Marks}
        options={{tabBarLabel: 'Marks'}}
      />
      <Tab.Screen
        name="Registration"
        component={Registration}
        options={{tabBarLabel: 'Registration'}}
      />
      <Tab.Screen
        name="Attandance"
        component={Attandance}
        options={{tabBarLabel: 'Attandance'}}
      />
    </Tab.Navigator>
  );
};
export default TopTabNavigator;
const styles = StyleSheet.create({
  contanier: {
    backgroundColor: colors.primary,
  },
});
