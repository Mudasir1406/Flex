import React, {useState, useEffect} from 'react';
import {Block, Header, StudyPlanCard} from '../components';
import {CourseService} from '../services';
import {useLoading} from '../context/LoadingContext';
import {useUser} from '../context/UserContext';
const StudyPlan = ({navigation}) => {
  const {setLoading} = useLoading();
  const {user} = useUser();
  const [courses, setCourses] = useState();

  useEffect(() => {
    setLoading(true);

    CourseService.getAllCourses()
      .then(docs => {
        setCourses(docs);
      })
      .catch(err => console.log(err))
      .finally(_ => setLoading(false));
  }, []);

  const renderCard = no => (
    <StudyPlanCard
      key={no}
      heading={`Semester no: 0${no}`}
      courses={courses?.filter(doc => doc?.semester === no)}
    />
  );

  return (
    <>
      <Header
        heading="Tentative Study Plan"
        onPress={() => navigation.navigate('Profile')}
      />
      <Block contentContainerStyle={{padding: 20}}>
        {[...Array(8).keys()].map((item, index) => renderCard(index + 1))}
      </Block>
    </>
  );
};

export default StudyPlan;
