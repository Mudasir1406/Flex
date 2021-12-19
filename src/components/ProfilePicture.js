import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {colors, fonts, images} from '../constants';
const ProfilePicture = ({source}) => {
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
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 80,
    marginBottom: 10,
    borderColor: colors.borderColor,
    borderWidth: 1,
  },
});
export default ProfilePicture;
