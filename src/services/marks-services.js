import firestore from '@react-native-firebase/firestore';
import {useUser} from '../context/UserContext';

export const getMarks = async user => {
  if (!user?.uid || !user?.semester) return;

  return firestore()
    .collection('marks')
    .where('userId', '==', user?.uid)
    .where('semester', '==', user?.semester)
    .orderBy('created_at', 'asc')
    .get()
    .then(snap => {
      const courses = [];
      snap.forEach(doc => {
        courses.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return courses;
    });
};
