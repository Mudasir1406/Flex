import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {} from 'react-native-gesture-handler';
import {colors, fonts} from '../constants';

const PrimaryButton = ({heading, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.contanier}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.text}> {heading}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  contanier: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.lightBlue,
    elevation: 5,
    alignItems: 'center',
    marginHorizontal: 50,
    width: 120,
    marginBottom: 30,
  },
  text: {
    color: colors.white,
    ...fonts.marks,
  },
});
