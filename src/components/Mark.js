import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../constants';

const Mark = ({heading}) => {
  return (
    <View style={styles.contanier}>
      <View style={styles.headingcontanier}>
        <Text style={styles.heading}>{heading}</Text>
      </View>
      <View style={styles.innerContanier}>
        <Text style={styles.text}>Assingments</Text>
        <Text style={styles.text}>Weightage</Text>
        <Text style={styles.text}>Obtain Marks</Text>
        <Text style={styles.text}>Total Marks</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: 10,
    marginTop: 20,
  },
  headingcontanier: {
    padding: 15,
    backgroundColor: colors.background,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  heading: {
    ...fonts.marks,
    color: colors.black,
  },
  innerContanier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 10,
  },
  text: {
    ...fonts.marksText,
    color: colors.black,
  },
});
export default Mark;
