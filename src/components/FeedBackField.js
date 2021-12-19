import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../constants';
import FeedBackButton from './FeedBackButton';
const FeedBackField = ({code, name, ch, status, onPress}) => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.text}> {code}</Text>
      <Text
        style={{
          ...fonts.transcriptHeader,
          color: colors.black,
          maxWidth: 85,
        }}
        numberOfLines={3}>
        {name}
      </Text>
      <Text style={styles.text}>{ch}</Text>
      <Text style={styles.text}>{status}</Text>
      <FeedBackButton status={status} onPress={onPress} />
    </View>
  );
};

export default FeedBackField;

const styles = StyleSheet.create({
  contanier: {
    justifyContent: 'space-between',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...fonts.transcriptHeader,
    color: colors.black,
  },
});
