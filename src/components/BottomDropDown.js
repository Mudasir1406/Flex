import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../constants';

import {Picker} from '@react-native-picker/picker';
const BottomDropDown = () => {
  const [selectedCourse, setSelectedCourse] = useState();
  return (
    <View style={styles.contanier}>
      <Picker
        itemStyle={styles.lable}
        selectedValue={selectedCourse}
        onValueChange={(itemValue, itemIndex) => setSelectedCourse(itemValue)}>
        <Picker.Item label="Fall 2021" value="f21" />
        <Picker.Item label="Summer 2021" value="s21" />
      </Picker>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    width: 150,
    height: 50,
    borderRadius: 10,
    elevation: 7,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.white,
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
  lable: {},
});
export default BottomDropDown;
