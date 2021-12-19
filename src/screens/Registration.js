import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Block, RegistrationHeader, SelectCourseCard} from '../components';
import {images, colors, dummy} from '../constants';

const Registration = () => {
  return (
    <Block contentContainerStyle={{padding: 20}}>
      <RegistrationHeader />
      <SelectCourseCard
        courseId="CS2009"
        courseName="Design And Analysis Of Algorithm"
      />
    </Block>
  );
};
export default Registration;
