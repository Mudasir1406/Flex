import React, {useEffect, useState} from 'react';
import {
  Block,
  Header,
  List,
  CourseDropDown,
  BottomDropDown,
  Mark,
} from '../components';
import {useLoading} from '../context/LoadingContext';
import {useUser} from '../context/UserContext';
import {MarksServices} from '../services';
const options = ['Design and Analysis of Algorithm', 'Software Engineering'];

const Marks = () => {
  const {setLoading} = useLoading();
  const {user} = useUser();
  const [marks, setMarks] = useState([]);
  const [course, setCourse] = useState('');
  useEffect(() => {
    if (user) {
      setLoading(true);
      MarksServices.getMarks(user)
        .then(doc => {
          setMarks(doc);
        })
        .catch(err => console.log(err))
        .finally(_ => setLoading(false));
    } else {
    }
  }, [user]);

  return (
    <>
      <Block contentContainerStyle={{padding: 20}}>
        <CourseDropDown
          selected={course}
          onSelect={setCourse}
          options={options}
        />

        {marks?.map((item, index) =>
          item?.name === course ? (
            <Mark heading={item?.type} key={index} mark={item} />
          ) : null,
        )}
      </Block>
    </>
  );
};
export default Marks;
