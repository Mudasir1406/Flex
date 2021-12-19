import firestore from '@react-native-firebase/firestore';

export const getCourses = () => {
  return firestore()
    .collection('courses')
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
