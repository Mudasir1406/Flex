import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../constants';
const SelectCourseCard = ({courseId, courseName}) => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.text}>{courseId}</Text>
      <Text style={styles.text} numberOfLines={2}>
        {courseName}
      </Text>
      <View style={{paddingHorizontal: 10}}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    padding: 20,
    backgroundColor: colors.background,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    ...fonts.courseCard,
    color: colors.black,
    maxWidth: 150,
  },
});
export default SelectCourseCard;
