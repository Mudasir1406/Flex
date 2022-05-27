import React, {useState} from 'react';
import {
  AuthButton,
  AuthTextInput,
  TouchableText,
  Block,
  AuthHeading,
} from '../components';
import {Auth} from '../services';
import {Alert, Image} from 'react-native';
import {images, colors} from '../constants';
const DeleteUser = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Block
      contentContainerStyle={{padding: 20, paddingTop: 50}}
      backgroundColor={colors.primary}>
      <Image source={images.Logo} />
      <AuthHeading heading="Delete Student" />
      <AuthTextInput
        placeholder="Email"
        name="Email"
        onChangeText={e => setEmail(e)}
      />
      <AuthTextInput
        placeholder="Password"
        name="Lock"
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
      />
      <AuthButton
        buttontext="Delete"
        onPress={() => Auth.deleteUser(email, password, navigation)}
      />
      <TouchableText
        text="Back To Sign In"
        onPress={() => navigation.navigate('Login')}
      />
    </Block>
  );
};
export default DeleteUser;
