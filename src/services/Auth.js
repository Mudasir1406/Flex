import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

//SignIn Handling
export const signIn = async (email, password) => {
  if (!email?.trim() || !password) {
    throw new Error('Email & Password could not be empty.');
  }

  return auth().signInWithEmailAndPassword(email.trim(), password);
};
export const signUp = async user => {
  if (
    !user.rollNo ||
    !user.degree ||
    !user.batch ||
    !user.section ||
    !user.campus ||
    !user.status ||
    !user.studentName ||
    !user.dob ||
    !user.bloodGroup ||
    !user.gender ||
    !user.studentCNIC ||
    !user.nationality ||
    !user.mobileNumber ||
    !user.address ||
    !user.homePhone ||
    !user.postalCode ||
    !user.city ||
    !user.country ||
    !user.relation ||
    !user.fatherName ||
    !user.fatherCNIC ||
    !user.email?.trim() ||
    !user.password
  )
    throw new Error('All fields are mandatory.');

  return auth()
    .createUserWithEmailAndPassword(user.email.trim(), user.password)
    .then(cred => {
      const {uid} = cred.user;

      auth().currentUser.updateProfile({
        displayName: user.name,
      });

      return uid;
    })
    .then(uid =>
      createUserInDatabase(
        uid,
        user.rollNo,
        user.degree,
        user.batch,
        user.section,
        user.campus,
        user.status,
        user.studentName,
        user.dob,
        user.bloodGroup,
        user.gender,
        user.studentCNIC,
        user.nationality,
        user.mobileNumber,
        user.address,
        user.homePhone,
        user.postalCode,
        user.city,
        user.country,
        user.relation,
        user.fatherName,
        user.fatherCNIC,
        user.email?.trim(),
        user.password,
      ),
    );
};

//User needs to be created in database on SignUp
export const createUserInDatabase = (
  uid,
  rollNo,
  degree,
  batch,
  section,
  campus,
  status,
  studentName,
  dob,
  bloodGroup,
  gender,
  studentCNIC,
  nationality,
  mobileNumber,
  address,
  homePhone,
  postalCode,
  city,
  country,
  relation,
  fatherName,
  fatherCNIC,
  email,
) => {
  return firestore().collection('users').doc(uid).set({
    uid,
    rollNo,
    degree,
    batch,
    section,
    campus,
    status,
    studentName,
    dob,
    bloodGroup,
    gender,
    studentCNIC,
    nationality,
    mobileNumber,
    address,
    homePhone,
    postalCode,
    city,
    country,
    relation,
    fatherName,
    fatherCNIC,
    email,
    created_at: firestore.FieldValue.serverTimestamp(),
  });
};

//Sign Out
export const signOut = () => {
  return auth().signOut();
};
//Get User Data
export const getUserById = async () => {
  return firestore()
    .collection('users')
    .doc(auth()?.currentUser?.uid)
    .get()
    .then(user => user.data());
};
//Change Password
export const reauthenticate = currentPassword => {
  const user = auth().currentUser;
  const cred = auth.EmailAuthProvider.credential(user.email, currentPassword);

  return user.reauthenticateWithCredential(cred);
};
export const changePassword = async (
  currentPassword,
  newPassword,
  confirmNewPassword,
  navigation,
) => {
  if (!currentPassword || !newPassword)
    throw new Error('All feilds are required');

  if (newPassword !== confirmNewPassword)
    throw new Error('New Password Is Not Same');

  reauthenticate(currentPassword)
    .then(() => {
      const user = auth().currentUser;
      user
        .updatePassword(newPassword)
        .then(_ => {
          Alert.alert('Sucess', 'Your Password Has Been Changed', [
            {text: 'OK', onPress: () => navigation.goBack()},
          ]);
        })
        .catch(err => Alert.alert('Error', err.message));
    })
    .then(_ => {})
    .catch(err => Alert.alert('Error', err.message));
};

export const updateProfilePic = async (prevImageUri, imageUri, uid) => {
  return Storage.uploadImage(prevImageUri, imageUri, uid).then(url => {
    return firestore().collection('users').doc(uid).update({
      profilePicture: url,
    });
  });
};

export const deleteUser = async (email, password, navigation) => {
  return auth()
    .signInWithEmailAndPassword(email?.trim(), password)
    .then(user => {
      console.log(user);
      return firestore()
        .collection('users')
        .doc(user?.user?.uid)
        .delete()
        .then(() =>
          Alert.alert('Sucess', `User with Email ${email} deleted`, [
            {
              text: 'Ok',
              onPress: () => navigation.goBack(),
            },
          ]),
        );
    });
};
