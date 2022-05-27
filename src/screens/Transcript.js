import firestore from '@react-native-firebase/firestore';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  Block,
  Header,
  TranscriptContanier,
  TranscriptCard,
} from '../components';
import {images} from '../constants';
import data from '../dummy/transcript';

const Transcript = ({navigation}) => {
  const uploadData = () => {
    data.map(doc =>
      firestore()
        .collection('trascripts')
        .add(doc)
        .catch(err => console.log(err)),
    );
  };

  return (
    <>
      <Header
        heading="Student Transcript"
        onPress={() => navigation.navigate('Profile')}
        source={images.profile}
      />

      <Block contentContainerStyle={{padding: 10}}>
        <TranscriptCard
          chAttemp={14}
          chErnd={14}
          gpa={3.23}
          sgpa={3.23}
          heading="Fall 2019"
        />
      </Block>
    </>
  );
};

export default Transcript;

const styles = StyleSheet.create({});
