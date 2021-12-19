import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Marks,
  Transcript,
  StudyPlan,
  FeeChalan,
  CourseFeedBack,
} from '../screens';
import * as SvgIcons from '../../assets/svg';
import TopTabNavigator from './TopTabNavigator';

const Tab = createBottomTabNavigator();

export default BottomTab = () => {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let activeIcon, InactiveIcon;
          let Icon;
          if (route.name == 'Home') {
            activeIcon = 'HomeFilledIcon';
            InactiveIcon = 'HomeIcon';
          } else if (route.name == 'CourseDetails') {
            activeIcon = 'CourseDetailsFilledIcon';
            InactiveIcon = 'CourseDetailsIcon';
          } else if (route.name == 'Transcript') {
            activeIcon = 'TranscriptFilledIcon';
            InactiveIcon = 'TranscriptIcon';
          } else if (route.name == 'StudyPlan') {
            activeIcon = 'StudyPlanFilledIcon';
            InactiveIcon = 'StudyPlanIcon';
          } else if (route.name == 'FeeChalan') {
            activeIcon = 'FeeChalanFilledIcon';
            InactiveIcon = 'FeeChalanIcon';
          } else if (route.name == 'CourseFeedBack') {
            activeIcon = 'CourseFeedBackFilledIcon';
            InactiveIcon = 'CourseFeedBackIcon';
          }
          Icon = SvgIcons[focused ? activeIcon : InactiveIcon];
          return <Icon />;
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="CourseDetails" component={TopTabNavigator} />
      <Tab.Screen name="Transcript" component={Transcript} />
      <Tab.Screen name="StudyPlan" component={StudyPlan} />
      <Tab.Screen name="FeeChalan" component={FeeChalan} />
      <Tab.Screen name="CourseFeedBack" component={CourseFeedBack} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    borderRadius: 20,
  },
});
