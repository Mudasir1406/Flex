import React, {useEffect, useState} from 'react';
import {Block, Header, List} from '../components';
import {images, colors, dummy} from '../constants';
import {useUser} from '../context/UserContext';

const Home = ({navigation}) => {
  const {user} = useUser();

  return (
    <>
      <Header
        heading="Student Information"
        source={images.profile}
        onPress={() => navigation.navigate('Profile')}
      />
      <Block contentContainerStyle={{padding: 20}}>
        <List studentData={user}></List>
      </Block>
    </>
  );
};
export default Home;
