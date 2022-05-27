import React from 'react';
import {Alert, View} from 'react-native';
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
        <FeeChalanCard heading="Serial No" value="1" />
        <FeeChalanCard heading="Amount" value="17400/=" />
        <FeeChalanCard heading="Generated Date" value="04-sep-2021" />
        <FeeChalanCard heading="Due Date" value="22-sep-2021" />
        <FeeChalanCard heading="Status" value="Paid" />
      </Block>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 10,
        }}>
        <PrimaryButton heading="Details" />
        <PrimaryButton
          heading="Print"
          onPress={() => Alert.alert('Alert', 'Chalan Printed')}
        />
      </View>
    </>
  );
};

export default FeeChalan;
