import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Back} from 'svg';
import {colors} from '../constants';
const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.contanier}
      onPress={onPress}
      activeOpacity={0.8}>
      <Back />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  contanier: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
});
