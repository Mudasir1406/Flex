import React, {useState} from 'react';
import {
  AuthButton,
  AuthTextInput,
  TouchableText,
  Block,
  AuthHeading,
} from '../components';
import {Image} from 'react-native';
import {images, colors} from '../constants';
const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('Email');
  return (
    <Block
      contentContainerStyle={{padding: 20, paddingTop: 50}}
      backgroundColor={colors.primary}>
      <Image source={images.Logo} />
      <AuthHeading heading="Forgot Password" />
      <AuthTextInput
        placeholder={email}
        name="Email"
        onChange={e => setEmail(e)}
      />
      <AuthButton buttontext="Send" />
      <TouchableText
        text="Back To Sign In"
        onPress={() => navigation.navigate('Login')}
      />
    </Block>
  );
};
export default ForgotPassword;
