import React, {useReducer, useState} from 'react';
import {Alert} from 'react-native';
import {Auth} from '../services';
import {
  AuthButton,
  AuthTextInput,
  Block,
  Header,
  ProfilePictureAdd,
  SelectCourseCard,
} from '../components';
import ImagePicker from 'react-native-image-crop-picker';
const AddUser = ({navigation}) => {
  const [student, setStudent] = useState({
    rollNo: '',
    degree: '',
    batch: '',
    section: '',
    campus: '',
    status: '',
    studentName: '',
    dob: '',
    bloodGroup: '',
    gender: '',
    studentCNIC: '',
    nationality: '',
    email: '',
    mobileNumber: '',
    address: '',
    homePhone: '',
    postalCode: '',
    city: '',
    country: '',
    relation: '',
    fatherName: '',
    fatherCNIC: '',
    withHoldingTax: '',
    password: '',
    profilePicture: '',
  });
  const handleChange = (name, value) => {
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const signUp = () => {
    Auth.signUp(student)
      .then(_ => {})
      .catch(err => Alert.alert('Error', err.message))
      .finally(() => console.log('done'));
  };
  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      setStudent({...student, profilePicture: image.path}),
        Auth.updateProfilePic(student.profilePicture, image.path, uid);
    });
  };

  return (
    <>
      {console.log(student.profilePicture)}
      <Header
        withBack={true}
        heading="Admin"
        onPressBack={() => navigation.goBack()}
      />
      <Block contentContainerStyle={{padding: 20}}>
        <ProfilePictureAdd
          onPress={openGallery}
          source={student.profilePicture}
        />
        <AuthTextInput
          name="Email"
          placeholder="Roll No"
          value={student.rollNo}
          onChangeText={e => handleChange('rollNo', e)}
          maxLength={6}
        />
        <AuthTextInput
          name="Email"
          placeholder="Degree"
          value={student.degree}
          onChangeText={e => handleChange('degree', e)}
          maxLength={6}
        />
        <AuthTextInput
          name="Email"
          placeholder="Batch"
          value={student.batch}
          onChangeText={e => handleChange('batch', e)}
          maxLength={4}
        />
        <AuthTextInput
          name="Email"
          value={student.section}
          placeholder="Section"
          onChangeText={e => handleChange('section', e)}
          maxLength={1}
        />
        <AuthTextInput
          name="Email"
          placeholder="Campus"
          onChangeText={e => handleChange('campus', e)}
        />
        <AuthTextInput
          name="Email"
          placeholder="Status"
          value={student.status}
          onChangeText={e => handleChange('status', e)}
        />
        <AuthTextInput
          name="Email"
          placeholder="Student Name"
          value={student.studentName}
          onChangeText={e => handleChange('studentName', e)}
        />
        <AuthTextInput
          name="Email"
          placeholder="Date of Birth"
          value={student.dob}
          onChangeText={e => handleChange('dob', e)}
        />
        <AuthTextInput
          name="Email"
          value={student.bloodGroup}
          placeholder="Blood Group"
          onChangeText={e => handleChange('bloodGroup', e)}
          minLength={4}
        />
        <AuthTextInput
          name="Email"
          value={student.gender}
          placeholder="Gender"
          onChangeText={e => handleChange('gender', e)}
          // autoComplete={gender}
        />
        <AuthTextInput
          name="Email"
          placeholder="Cnic number"
          value={student.studentCNIC}
          onChangeText={e => handleChange('studentCNIC', e)}
        />
        <AuthTextInput
          name="Email"
          placeholder="Nationality"
          value={student.nationality}
          onChangeText={e => handleChange('nationality', e)}
        />
        <AuthTextInput
          name="Email"
          placeholder="Email"
          value={student.email}
          onChangeText={e => handleChange('email', e)}
        />
        <AuthTextInput
          name="Email"
          value={student.mobileNumber}
          placeholder="Mobile Number"
          onChangeText={e => handleChange('mobileNumber', e)}
        />
        <AuthTextInput
          name="Email"
          value={student.address}
          placeholder="Address"
          onChangeText={e => handleChange('address', e)}
        />
        <AuthTextInput
          name="Email"
          placeholder="Home Phone"
          value={student.homePhone}
          onChangeText={e => handleChange('homePhone', e)}
        />
        <AuthTextInput
          name="Email"
          placeholder="Postal code"
          value={student.postalCode}
          onChangeText={e => handleChange('postalCode', e)}
        />
        <AuthTextInput
          name="Email"
          placeholder="City"
          value={student.city}
          onChangeText={e => handleChange('city', e)}
        />
        <AuthTextInput
          name="Email"
          placeholder="Country"
          value={student.country}
          onChangeText={e => handleChange('country', e)}
        />
        <AuthTextInput
          name="Email"
          placeholder="Relation"
          value={student.relation}
          onChangeText={e => handleChange('relation', e)}
        />
        <AuthTextInput
          name="Email"
          placeholder="Father Name"
          value={student.fatherName}
          onChangeText={e => handleChange('fatherName', e)}
        />
        <AuthTextInput
          name="Email"
          value={student.fatherCNIC}
          placeholder="Father CNIC"
          onChangeText={e => handleChange('fatherCNIC', e)}
        />
        <AuthTextInput
          name="Email"
          value={student.withHoldingTax}
          placeholder="For Holding Tax"
          onChangeText={e => handleChange('withHoldingTax', e)}
        />
        <AuthTextInput
          name="Lock"
          placeholder="Password"
          value={student.password}
          onChangeText={e => handleChange('password', e)}
          secureTextEntry={true}
        />

        <AuthButton buttontext="Sign up" onPress={signUp} />

        <AuthButton buttontext="Upload Image" onPress={openGallery} />
      </Block>
    </>
  );
};

export default AddUser;
