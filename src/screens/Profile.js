import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {
  AuthTextInput,
  Block,
  Header,
  List,
  ProfilePicture,
  TouchableText,
} from '../components';
import {images, colors, dummy} from '../constants';
import {useLoading} from '../context/LoadingContext';
import {Auth} from '../services';

const Profile = ({navigation}) => {
  const [studentData, setStudetData] = useState();
  const {setLoading} = useLoading();
  useEffect(() => {
    setLoading(true);
    Auth.getUserById()
      .then(data => setStudetData(data))
      .catch(err => Alert.alert('Error', err.message))
      .finally(_ => setLoading(false));
  }, []);
  return (
    <>
      <Header
        heading="Profile"
        source={images.profile}
        withBack={true}
        onPressBack={() => navigation.goBack()}
      />
      <Block contentContainerStyle={{padding: 20}}>
        <ProfilePicture source={images.profile}></ProfilePicture>
        <AuthTextInput name="Email" value={studentData?.email} />
        <AuthTextInput name="Profile" value={studentData?.studentName} />
        <TouchableText
          text="Change Password"
          color={colors.black}
          onPress={() => navigation.navigate('ChangePassword')}
        />
        <TouchableText
          text="Log Out"
          color={colors.black}
          onPress={() => Auth.signOut()}
        />
      </Block>
    </>
  );
};
export default Profile;
