import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {colors, fonts} from '../constants';

const MultiLineTextInput = () => {
  return (
    <>
      <View style={styles.contanier}>
        <TextInput
          placeholder="Write Your FeedBack Here..."
          multiline={true}
          style={styles.text}
        />
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </>
  );
};

export default MultiLineTextInput;

const styles = StyleSheet.create({
  contanier: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    height: 200,
    padding: 10,
  },
  text: {
    ...fonts.marksText,
    color: colors.black,
  },
  button: {
    padding: 15,
    backgroundColor: colors.lightBlue,
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    marginLeft: '73%',
    elevation: 5,
  },
  buttonText: {
    ...fonts.AuthButton,
    color: colors.white,
  },
});
