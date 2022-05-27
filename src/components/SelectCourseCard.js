import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../constants';
import CheckBox from '@react-native-community/checkbox';
const SelectCourseCard = ({courseId, courseName}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.contanier}>
      <Text style={styles.text}>{courseId}</Text>
      <Text style={styles.text} numberOfLines={2}>
        {courseName}
      </Text>
      <View style={{paddingHorizontal: 10}}></View>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
        tintColors={colors.primary}
      />
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
    marginBottom: 25,
  },
  text: {
    ...fonts.courseCard,
    color: colors.black,
    maxWidth: 150,
  },
});
export default SelectCourseCard;
