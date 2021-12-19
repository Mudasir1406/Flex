import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../constants';
const AuthButton = ({buttontext, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.contanier}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.text}>{buttontext}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  contanier: {
    paddingVertical: 15,
    width: '100%',

    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: colors.black,
    elevation: 5,
  },
  text: {
    ...fonts.AuthButton,
    color: colors.white,
    alignSelf: 'center',
  },
});
export default AuthButton;
