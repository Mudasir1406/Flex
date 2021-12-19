import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, fonts} from '../constants';
import * as icons from 'svg';
const AuthTextInput = ({name, ...props}) => {
  const Icon = icons[name];
  return (
    <View style={styles.Contanier}>
      <View style={styles.icon}>
        <Icon />
      </View>
      <TextInput
        style={styles.textinput}
        {...props}
        placeholderTextColor={colors.borderColor}
        selectionColor={colors.borderColor}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Contanier: {
    alignItems: 'center',
    marginBottom: 40,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 5,
  },
  textinput: {
    flex: 1,
    marginLeft: 10,
    ...fonts.Authtextinput,
    color: colors.black,
    marginTop: 4,
  },
  icon: {
    paddingLeft: 10,
  },
});
export default AuthTextInput;
