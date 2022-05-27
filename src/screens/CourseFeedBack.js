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
          code="CS2009"
          name="Design And Analysis Of Algorithms"
          ch="3"
          status="Submited"
          onPress={() => navigation.navigate('GiveFeedBack')}
        />
        <FeedBackField
          code="CS0123"
          name="Islamic Study"
          ch="3"
          status="Not Submited"
          onPress={() => navigation.navigate('GiveFeedBack')}
        />
        <FeedBackField
          code="SS0018"
          name="Social Sciences        "
          ch="3"
          status="Not Submited"
          onPress={() => navigation.navigate('GiveFeedBack')}
        />
        <FeedBackField
          code="CS8809"
          name="Software Engineerinng"
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
