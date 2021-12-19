import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Block, Header, TranscriptContanier} from '../components';

const Transcript = ({navigation}) => {
  return (
    <>
      <Header
        heading="Student Transcript"
        onPress={() => navigation.navigate('Profile')}
      />
      <Block contentContainerStyle={{padding: 10}}>
        <TranscriptContanier />
      </Block>
    </>
  );
};

export default Transcript;

const styles = StyleSheet.create({});
