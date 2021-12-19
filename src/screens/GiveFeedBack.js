import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Block, Header, MultiLineTextInput} from '../components';

const GiveFeedBack = ({navigation}) => {
  return (
    <>
      <Header
        heading="Course Feedback"
        onPress={() => navigation.navigate('Profile')}
        withBack={true}
        onPressBack={() => navigation.goBack()}
      />
      <Block contentContainerStyle={{padding: 20}}>
        <MultiLineTextInput />
      </Block>
    </>
  );
};

export default GiveFeedBack;

const styles = StyleSheet.create({});
