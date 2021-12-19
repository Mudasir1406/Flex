import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../constants';

const FeedBackButton = ({status, onPress}) => {
  return (
    <>
      {status === 'Not Submited' ? (
        <TouchableOpacity
          style={styles.activeButton}
          activeOpacity={0.8}
          onPress={onPress}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.inActiveButton}>
          <Text style={styles.textInActive}>Submitted</Text>
        </View>
      )}
    </>
  );
};

export default FeedBackButton;

const styles = StyleSheet.create({
  activeButton: {
    padding: 5,
    backgroundColor: colors.lightBlue,
    elevation: 5,
    borderRadius: 5,
  },
  inActiveButton: {
    padding: 5,
    backgroundColor: colors.lightBlue,
    borderRadius: 5,
    opacity: 0.7,
  },
  text: {
    ...fonts.marksText,
    color: colors.white,
  },
  textInActive: {
    ...fonts.inActiveButton,
    color: colors.white,
  },
});
