import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Block, CourseHeader, FeedBackField, Header} from '../components';

const CourseFeedBack = ({navigation}) => {
  return (
    <>
      <Header
        heading="Course Feedback"
        onPress={() => navigation.navigate('Profile')}
      />
      <Block contentContainerStyle={{padding: 20}}>
        <CourseHeader />
        <FeedBackField
          code="2009"
          name="Design And Analysis Of Algorithms"
          ch="3"
          status="Submited"
          onPress={() => navigation.navigate('GiveFeedBack')}
        />
        <FeedBackField
          code="2009"
          name="Design And Analysis Of Algorithms"
          ch="3"
          status="Not Submited"
          onPress={() => navigation.navigate('GiveFeedBack')}
        />
      </Block>
    </>
  );
};

export default CourseFeedBack;

const styles = StyleSheet.create({});
