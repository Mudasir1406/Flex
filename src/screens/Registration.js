import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Block, RegistrationHeader, SelectCourseCard} from '../components';
import {images, colors, dummy} from '../constants';
import {useUser} from '../context/UserContext';
import {CourseService} from '../services';
import {useLoading} from '../context/LoadingContext';

const Registration = () => {
  const {user} = useUser();
  const {setLoading} = useLoading();
  const [courses, setCourses] = useState();
  useEffect(() => {
    setLoading(true);
    CourseService.getCourses(user?.semester)
      .then(docs => setCourses(docs))
      .catch(err => console.log(err))
      .finally(_ => setLoading(false));
  }, []);
  console.log(courses);
  return (
    <Block contentContainerStyle={{padding: 20}}>
      <RegistrationHeader />
      {courses?.map((item, index) => (
        <SelectCourseCard
          key={index}
          courseId={item?.code}
          courseName={item?.name}
        />
      ))}
    </Block>
  );
};
export default Registration;
