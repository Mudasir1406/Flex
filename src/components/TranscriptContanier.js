import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants';
import TranscriptCard from './TranscriptCard';
const TranscriptContanier = () => {
  return (
    <View style={styles.contanier}>
      <TranscriptCard
        chAttemp={14}
        chErnd={14}
        gpa={3.23}
        sgpa={3.23}
        heading="Fall 2019"
      />
      <TranscriptCard
        chAttemp={14}
        chErnd={14}
        gpa={3.23}
        sgpa={3.23}
        heading="Spring 2020"
      />
    </View>
  );
};

export default TranscriptContanier;

const styles = StyleSheet.create({
  contanier: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.lightGray,
  },
});
