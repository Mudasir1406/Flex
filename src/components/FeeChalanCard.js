import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../constants';

const FeeChalanCard = ({heading, value}) => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.text}>{heading}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default FeeChalanCard;

const styles = StyleSheet.create({
  contanier: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
  },
  text: {
    ...fonts.marksText,
    color: colors.black,
  },
});
