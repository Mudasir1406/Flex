import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CourseCard from './CourseCard';
import {colors, fonts} from '../constants';

const TranscriptCard = ({heading, chAttemp, chErnd, sgpa, gpa}) => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.innerContanier}>
        <Text style={styles.text}>Cr.Attempt:{chAttemp}</Text>
        <Text style={styles.text}>Ch.Ernd:{chErnd}</Text>
        <Text style={styles.text}>CGPA:{gpa}</Text>
        <Text style={styles.text}>SGPA:{sgpa}</Text>
      </View>
      <View style={styles.courseContanier}>
        <Text style={styles.courseHeading}>Code</Text>
        <Text style={styles.courseHeading}> CourseName </Text>
        <Text style={styles.courseHeading}>Section</Text>
        <Text style={styles.courseHeading}> CrdHrs</Text>
        <Text style={styles.courseHeading}>Grade</Text>
        <Text style={styles.courseHeading}>Points</Text>
        <Text style={styles.courseHeading}>Type</Text>
      </View>
      <CourseCard
        code="2009"
        name="Design And Analysis Of Algorithms"
        ch={3}
        section="BSCS3C"
        grade="A+"
        points="I"
        type="Core"
      />
    </View>
  );
};

export default TranscriptCard;

const styles = StyleSheet.create({
  heading: {
    ...fonts.header,
    color: colors.black,
  },
  contanier: {
    backgroundColor: colors.white,
    marginBottom: 30,
  },
  innerContanier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    ...fonts.AuthButton,
    color: colors.black,
  },
  courseContanier: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  courseHeading: {
    ...fonts.transcriptHeader,
    color: colors.black,
  },
});
