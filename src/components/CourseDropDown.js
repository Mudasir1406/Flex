import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, fonts} from '../constants';

import {Picker} from '@react-native-picker/picker';

// R791S1

const CourseDropDown = ({selected, onSelect, options}) => {
  return (
    <View style={styles.contanier}>
      <Picker
        itemStyle={styles.lable}
        selectedValue={selected}
        onValueChange={(itemValue, itemIndex) => onSelect(itemValue)}>
        <Picker.Item label="Select Course" value="" />
        {options?.map((option, index) => (
          <Picker.Item label={option} value={option} key={index} />
        ))}
      </Picker>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    width: '100%',
    backgroundColor: colors.background,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  lable: {
    ...fonts.Authtextinput,
    color: colors.black,
  },
});
export default CourseDropDown;
