import React, {useState} from 'react';
import {
  AuthButton,
  AuthTextInput,
  TouchableText,
  Block,
  Logo,
  AuthHeading,
  Header,
} from '../components';
import {Alert} from 'react-native';
import {Auth} from '../services';
import {Image} from 'react-native';
import {images, colors} from '../constants';
import {useLoading} from '../context/LoadingContext';
const ChangePassword = ({navigation}) => {
  const {setLoading} = useLoading();
  const [user, setUser] = useState({
    newPassword: '',
    currentPassword: '',
    confirmNewPassword: '',
  });
  const handleChange = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const pressSave = () => {
    setLoading(true);
    Auth.changePassword(
      user.currentPassword,
      user.newPassword,
      user.confirmNewPassword,
      navigation,
    )
      .then(() => {})
      .catch(err => Alert.alert('Error', err.message))
      .finally(_ => setLoading(false));
  };

  return (
    <>
      <Header heading="Change Password" source={images.profile} />
      <Block contentContainerStyle={{padding: 20, paddingTop: 50}}>
        <AuthTextInput
          placeholder="Current Password"
          name="Lock"
          secureTextEntry={true}
          onChangeText={e => handleChange('currentPassword', e)}
          value={user.currentPassword}
        />
        <AuthTextInput
          placeholder="New Password"
          name="Lock"
          secureTextEntry={true}
          onChangeText={e => handleChange('newPassword', e)}
          value={user.newPassword}
        />
        <AuthTextInput
          placeholder="Confirm New Password"
          name="Lock"
          secureTextEntry={true}
          onChangeText={e => handleChange('confirmNewPassword', e)}
          value={user.confirmNewPassword}
        />
        <AuthButton buttontext="Save" onPress={pressSave} />

        <TouchableText
          text="Go Back"
          color={colors.black}
          onPress={() => navigation.goBack()}
        />
      </Block>
    </>
  );
};
export default ChangePassword;
