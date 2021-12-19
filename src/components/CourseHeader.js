import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../constants';

const CourseHeader = () => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.text}>Code</Text>
      <Text style={styles.text}>CourseName</Text>
      <Text style={styles.text}>CrdHrs</Text>
      <Text style={styles.text}>Status</Text>
      <Text style={[styles.text, {marginLeft: 20}]}>Feedback</Text>
    </View>
  );
};

export default CourseHeader;

const styles = StyleSheet.create({
  contanier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    ...fonts.courseCard,
    color: colors.black,
  },
});
