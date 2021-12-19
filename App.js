import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppContanier from './src/navigation';
import LoadingContext from './src/context/LoadingContext';
import UserContext from './src/context/UserContext';

const App = () => {
  return (
    <UserContext>
      <LoadingContext>
        <AppContanier />
      </LoadingContext>
    </UserContext>
  );
};

const styles = StyleSheet.create({});

export default App;
