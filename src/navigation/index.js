import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useLoading} from '../context/LoadingContext';
import {useUser} from '../context/UserContext';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {Loading} from '../components';
import auth from '@react-native-firebase/auth';
import {Auth} from '../services';

export default AppContainer = () => {
  const {user, setUser} = useUser();
  const {loading, setLoading} = useLoading();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(_userAuth);
    return subscriber; // unsubscribe on unmount
  }, []);

  const _userAuth = async cred => {
    if (!cred?.uid) setUser();

    setLoading(true);
    Auth.getUserById()
      .then(data => setUser(data))
      .catch(err => console.log(err.message))
      .finally(_ => setLoading(false));
  };

  return (
    <>
      {loading && <Loading />}
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};
