import firestore from '@react-native-firebase/firestore';
import {useUser} from '../context/UserContext';
export const getMarks = () => {
  const {user} = useUser();
  return firestore()
    .collection('marks')
    .where('studet-id', '===', user?.rollNo)
    .where('semester', '===', user?.semester)
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
