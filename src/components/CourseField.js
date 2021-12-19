import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CourseField = ({code, name, ch, type}) => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.text}>{code}</Text>
      <Text
        style={{...fonts.transcriptHeader, color: colors.black, maxWidth: 85}}
        numberOfLines={3}>
        {name}
      </Text>
      <Text style={styles.text}>{ch}</Text>
      <Text style={styles.text}>{type}</Text>
    </View>
  );
};

export default CourseField;

const styles = StyleSheet.create({
  contanier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    ...fonts.transcriptHeader,
    color: colors.black,
  },
});
