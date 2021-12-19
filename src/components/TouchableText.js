import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../constants';

const TouchableText = ({text, color, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.contanier}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={[styles.text, {color: color || colors.white}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contanier: {
    marginTop: 60,
    alignSelf: 'center',
  },
  text: {
    ...fonts.TouchableText,
  },
});
export default TouchableText;
