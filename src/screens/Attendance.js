import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Block, Header, CourseDropDown} from '../components';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {colors} from '../constants';
const options = [
  'Computer Networks',
  'Software Engineering',
  'Artificial Intelligence',
];
const Attendance = ({navigation}) => {
  const [course, setCourse] = useState('');
  return (
    <Block contentContainerStyle={{padding: 25}}>
      <CourseDropDown
        selected={course}
        onSelect={setCourse}
        options={options}
      />
      {course !== '' ? (
        <View style={{alignItems: 'center', marginTop: 100}}>
          <AnimatedCircularProgress
            size={160}
            width={15}
            fill={80}
            tintColor={colors.primary}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor={colors.white}
          />
          <Text style={styles.text}>80%</Text>
        </View>
      ) : (
        <Text style={styles.text}>No courses Select </Text>
      )}
    </Block>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    alignSelf: 'center',
    flex: 1,
    marginTop: 20,
  },
});
