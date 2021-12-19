import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {
  Block,
  Header,
  List,
  CourseHeading,
  MarksContanier,
  CourseDropDown,
  BottomDropDown,
  Mark,
} from '../components';
import {images, colors, dummy} from '../constants';

const Marks = () => {
  return (
    <>
      <Block contentContainerStyle={{padding: 20}}>
        <CourseDropDown />
        <CourseHeading heading="Design And Analysis Of Algorithms" />
        <Mark heading="Assignment" />
        <Mark heading="Assignment" />
      </Block>
      <BottomDropDown />
    </>
  );
};
export default Marks;
