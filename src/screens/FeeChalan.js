import React from 'react';
import {View} from 'react-native';
import {Block, Header, FeeChalanCard, PrimaryButton} from '../components';
import {colors} from '../constants';
const FeeChalan = ({navigation}) => {
  return (
    <>
      <Header
        heading="FeeChalan"
        onPress={() => navigation.navigate('Profile')}
      />
      <Block
        contentContainerStyle={{
          borderWidth: 1,
          margin: 20,
          borderRadius: 10,
          borderColor: colors.borderColor,
          padding: 10,
          backgroundColor: colors.background,
        }}>
        <FeeChalanCard heading="Amount" value="1000/=" />
        <FeeChalanCard heading="Date" value="1000/=" />
        <FeeChalanCard heading="Amount" value="1000/=" />
        <FeeChalanCard heading="Amount" value="1000/=" />
        <FeeChalanCard heading="Amount" value="1000/=" />
        <FeeChalanCard heading="Amount" value="1000/=" />
        <FeeChalanCard heading="Amount" value="1000/=" />
      </Block>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 10,
        }}>
        <PrimaryButton heading="Details" />
        <PrimaryButton heading="Print" />
      </View>
    </>
  );
};

export default FeeChalan;
