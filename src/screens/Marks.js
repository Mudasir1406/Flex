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
import marks from '../dummy/marks';

const options = ['Design and Analysis of Algorithm'];

const Marks = () => {
  const [course, setCourse] = useState('');
  console.log(course);

  return (
    <>
      <Block contentContainerStyle={{padding: 20}}>
        <CourseDropDown
          selected={course}
          onSelect={setCourse}
          options={options}
        />
        {course ? (
          <CourseHeading heading="Design and Analysis Of Algorithms" />
        ) : null}
        {marks?.map((item, index) =>
          item?.name === course ? (
            <Mark heading={item?.type} key={index} mark={item} />
          ) : null,
        )}
      </Block>
      <BottomDropDown />
    </>
  );
};
export default Marks;
