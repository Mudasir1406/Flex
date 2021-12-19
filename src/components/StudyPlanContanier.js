import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants';
import StudyPlanCard from './StudyPlanCard';
const StudyPlanContanier = () => {
  return <View style={styles.contanier}></View>;
};

export default StudyPlanContanier;

const styles = StyleSheet.create({
  contanier: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.lightGray,
  },
});
