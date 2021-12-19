import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import {colors, fonts, images} from '../constants';
const ProfilePictureAdd = ({source, onPress}) => {
  return (
    <View style={styles.contanier}>
      <Image
        style={styles.image}
        source={
          source
            ? typeof source === 'number'
              ? source
              : {uri: source}
            : images.costumProfilePicture
        }
      />
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Text style={styles.text}>Change profile picture</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 80,
    marginBottom: 10,
  },
  text: {
    ...fonts.authBottomText,
  },
});
export default ProfilePictureAdd;
