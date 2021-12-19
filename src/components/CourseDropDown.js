import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../constants';

import {Picker} from '@react-native-picker/picker';

const CourseDropDown = () => {
  const [selectedCourse, setSelectedCourse] = useState();
  return (
    <View style={styles.contanier}>
      <Picker
        itemStyle={styles.lable}
        selectedValue={selectedCourse}
        onValueChange={(itemValue, itemIndex) => setSelectedCourse(itemValue)}>
        <Picker.Item label="Design And Analysis Of Algorithms" value="Algo" />
        <Picker.Item label="DataBase Managment" value="DB" />
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
