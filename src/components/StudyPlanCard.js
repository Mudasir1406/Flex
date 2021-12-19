import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../constants';

const StudyPlanCard = ({heading, courses}) => {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>{heading}</Text>
      </View>
      <View style={styles.outer}>
        <View style={styles.innerContanier}>
          <Text style={styles.courseHeading}>Code</Text>
          <Text style={[styles.courseHeading, {flex: 3}]}>CourseName</Text>
          <Text style={styles.courseHeading}>CrdHrs</Text>
          <Text style={styles.courseHeading}>Type</Text>
        </View>

        {courses?.map((course, index) => (
          <View style={styles.innerContanier} key={`${course?.code}-${index}`}>
            <Text style={styles.courseHeading}>{course?.code}</Text>
            <Text style={[styles.courseHeading, {flex: 3}]}>
              {course?.name}
            </Text>
            <Text style={styles.courseHeading}>{course?.ch}</Text>
            <Text style={styles.courseHeading}>{course?.type}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default StudyPlanCard;

const styles = StyleSheet.create({
  circle: {
    width: 10,
    height: 10,
    backgroundColor: colors.black,
    borderRadius: 20,
    marginBottom: 3,
    marginRight: 10,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: {
    ...fonts.AuthHeadingText,
    color: colors.black,
    marginBottom: 10,
    marginTop: 20,
  },
  innerContanier: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  courseHeading: {
    ...fonts.transcriptHeader,
    color: colors.black,
    flex: 1,
    alignItems: 'center',
  },
  outer: {
    borderRadius: 10,
    borderColor: colors.borderColor,
    borderWidth: 1,
    padding: 20,
    paddingBottom: 10,
  },
});
