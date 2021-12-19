import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../constants';

const RegistrationHeader = () => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.heading}>Course Code</Text>
      <Text style={styles.heading}>Course Name</Text>
      <Text style={styles.heading}>Add</Text>
      <Text style={styles.heading}>Drop</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    padding: 20,
    backgroundColor: colors.background,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    ...fonts.registrationHeadertext,
    color: colors.black,
  },
});
export default RegistrationHeader;
