import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../constants';

const AuthHeading = ({heading}) => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.text}>{heading}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    ...fonts.AuthHeadingText,
    color: colors.white,
  },
  contanier: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    marginTop: 60,
    marginBottom: 30,
  },
});
export default AuthHeading;
