import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Block, Header} from '../components';

const Attendance = ({navigation}) => {
  return (
    <Block>
      <Header heading="Attandance" />
      <Text style={styles.text}>No Record yet</Text>
    </Block>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    alignSelf: 'center',
    flex: 1,
  },
});
