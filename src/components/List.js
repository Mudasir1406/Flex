import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {colors, fonts, dummy} from '../constants';
import {Circle} from 'svg';
const List = ({studentData}) => {
  return (
    <>
      <View style={styles.headingcontanier}>
        <View style={styles.circle} />
        <Text style={styles.heading}>University Information</Text>
      </View>
      <View style={styles.innerContanier}>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Roll Number : </Text>
          <Text style={styles.textdata}>{studentData?.rollNo}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Degree : </Text>
          <Text style={styles.textdata}>{studentData?.degree}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Batch : </Text>
          <Text style={styles.textdata}>{studentData?.batch}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Section : </Text>
          <Text style={styles.textdata}>{studentData?.section}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Campus : </Text>
          <Text style={styles.textdata}>{studentData?.campus}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Status : </Text>
          <Text style={styles.textdata}>{studentData?.status}</Text>
        </View>
      </View>
      <View style={styles.headingcontanier}>
        <View style={styles.circle} />
        <Text style={styles.heading}>Personal Information</Text>
      </View>
      <View style={styles.innerContanier}>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Name : </Text>
          <Text style={styles.textdata}>{studentData?.studentName}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Date Of Birth : </Text>
          <Text style={styles.textdata}>{studentData?.dob}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Blood Group : </Text>
          <Text style={styles.textdata}>{studentData?.bloodGroup}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Gender : </Text>
          <Text style={styles.textdata}>{studentData?.gender}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>CNIC Number : </Text>
          <Text style={styles.textdata}>{studentData?.studentCNIC}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Nationality : </Text>
          <Text style={styles.textdata}>{studentData?.nationality}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Mobile Number : </Text>
          <Text style={styles.textdata}>{studentData?.mobileNumber}</Text>
        </View>
      </View>
      <View style={styles.headingcontanier}>
        <View style={styles.circle} />
        <Text style={styles.heading}>Contact Information</Text>
      </View>
      <View style={styles.innerContanier}>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Address : </Text>
          <Text style={styles.textdata}>{studentData?.address}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Home Phone : </Text>
          <Text style={styles.textdata}>{studentData?.homePhone}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Postal Code : </Text>
          <Text style={styles.textdata}>{studentData?.postalCode}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>City : </Text>
          <Text style={styles.textdata}>{studentData?.city}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Country : </Text>
          <Text style={styles.textdata}>{studentData?.country}</Text>
        </View>
      </View>
      <View style={styles.headingcontanier}>
        <View style={styles.circle} />
        <Text style={styles.heading}>Family Information</Text>
      </View>
      <View style={styles.innerContanier}>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Relation : </Text>
          <Text style={styles.textdata}>{studentData?.relation}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Father Name : </Text>
          <Text style={styles.textdata}>{studentData?.fatherName}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>Father CNIC : </Text>
          <Text style={styles.textdata}>{studentData?.fatherCNIC}</Text>
        </View>
        <View style={styles.fieldContanier}>
          <Text style={styles.text}>With Holding Tax : </Text>
          <Text style={styles.textdata}>{studentData?.withHoldingTax}</Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  heading: {
    ...fonts.header,
    color: colors.black,
    marginTop: 3,
    marginLeft: 10,
  },
  headingcontanier: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...fonts.listText,
    color: colors.black,
  },
  fieldContanier: {
    flexDirection: 'row',
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: colors.black,
    borderRadius: 20,
  },
  innerContanier: {
    marginLeft: 20,
    borderWidth: 1,
    padding: 5,
    borderColor: colors.borderColor,
    borderRadius: 10,
    backgroundColor: colors.lightGray,
  },
  textdata: {
    ...fonts.listTextData,
    color: colors.black,
  },
});
export default List;
