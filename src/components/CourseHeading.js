import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../constants';

const CourseHeading = ({heading}) => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    padding: 20,
    backgroundColor: colors.background,
    borderRadius: 10,
    marginBottom: 20,
  },
  heading: {
    ...fonts.listText,
    color: colors.black,
  },
});
export default CourseHeading;
