import React, {useState} from 'react';
import {
  AuthButton,
  AuthTextInput,
  TouchableText,
  Block,
  Logo,
  AuthHeading,
} from '../components';
import {Alert, Image} from 'react-native';
import {images, colors} from '../constants';
import {Auth} from '../services';
import {useLoading} from '../context/LoadingContext';

const Login = ({navigation}) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const {setLoading} = useLoading();

  const handleChange = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const signIn = () => {
    setLoading(true);
    Auth.signIn(user.email, user.password)
      .then(_ => {})
      .catch(err => Alert.alert('Error', err.message))
      .finally(() => setLoading(false));
  };
  return (
    <Block
      contentContainerStyle={{padding: 20, paddingTop: 50}}
      backgroundColor={colors.primary}>
      <Image source={images.Logo} style={{resizeMode: 'center'}} />
      <AuthHeading heading="Sign In" />
      <AuthTextInput
        placeholder="Email"
        name="Profile"
        value={user.email}
        keyboardType={'email-address'}
        onChangeText={e => handleChange('email', e)}
      />
      <AuthTextInput
        placeholder="Password"
        name="Lock"
        secureTextEntry={true}
        value={user.password}
        onChangeText={e => handleChange('password', e)}
        maxLength={12}
        minLength={6}
      />

      <AuthButton buttontext="Sign In" onPress={signIn} />
      <TouchableText
        text="Forgot Password?"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
      <TouchableText
        text="Add Student"
        onPress={() => navigation.navigate('AddUser')}
      />
      <TouchableText
        text="Delete Student"
        onPress={() => navigation.navigate('DeleteUser')}
      />
    </Block>
  );
};
export default Login;
