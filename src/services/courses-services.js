import firestore from '@react-native-firebase/firestore';

export const getCourses = async semester => {
  console.log(semester);
  let query = firestore().collection('courses');
  if (semester < 8 && semester > 0)
    query = query.where('semester', '==', semester + 1);

  return query.get().then(snap => {
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

export const getAllCourses = async () => {
  let query = firestore().collection('courses');

  return query.get().then(snap => {
    const courses = [];
    snap.forEach(docs => {
      courses.push({
        id: docs.id,
        ...docs.data(),
      });
    });
    console.log(courses);
    return courses;
  });
};
