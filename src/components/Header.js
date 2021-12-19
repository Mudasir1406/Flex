import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {colors, fonts} from '../constants';
import BackButton from './BackButton';
const Header = ({
  heading,
  source,
  onPress,
  navigation,
  withBack,
  onPressBack,
}) => {
  return (
    <View style={styles.contanier}>
      {withBack ? <BackButton onPress={onPressBack} /> : null}
      <Text style={styles.text}>{heading}</Text>
      <TouchableOpacity
        style={styles.imagecontanier}
        activeOpacity={0.8}
        onPress={onPress}>
        <Image style={styles.image} source={source}></Image>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
  },
  text: {
    ...fonts.header,
    color: colors.white,
  },
  image: {
    resizeMode: 'contain',
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  imagecontanier: {
    borderColor: colors.borderColor,
    borderWidth: 1.5,
    borderRadius: 100,
  },
});
export default Header;
