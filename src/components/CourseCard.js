import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../constants';

const CourseCard = ({code, name, section, ch, grade, points, type}) => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.text}>{code}</Text>
      <Text
        style={{maxWidth: 75, ...fonts.transcriptHeader, color: colors.black}}
        numberOfLines={3}>
        {name}
      </Text>
      <Text style={styles.text}>{section}</Text>
      <Text style={styles.text}>{ch}</Text>
      <Text style={styles.text}>{grade}</Text>
      <Text style={styles.text}>{points}</Text>
      <Text style={styles.text}>{type}</Text>
    </View>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  contanier: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    ...fonts.transcriptHeader,
    color: colors.black,
  },
});
