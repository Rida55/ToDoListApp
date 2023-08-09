import { View, Text, StatusBar, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { scale } from '../scale/scale';
import { User, Edit, Delete, UnCompletedIcon, Day } from '../../images'

import { FONTS } from '../../globalStyle/themeSizes';
import { color } from '../../globalStyle/colors';
interface Props {
  heading: string;
  pageType: string;
}
const MainHeader: React.FC<Props> = ({ heading, pageType }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const updateDate = () => {
    setCurrentDate(new Date());
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);
  return (
    <>

      <View style={styles.headerView}>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>{heading}</Text>
          <View style={styles.dateView}>
            <Text style={styles.dateText}>{currentDate.toDateString()}</Text>
          </View>
        </View>
        <Image
        tintColor={color.white}
          source={Day}
          style={styles.userImage}
        />
      </View>
    </>
  );
};

export default MainHeader;
const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingBottom: scale(1),
    backgroundColor: color.primary,
    paddingVertical: scale(20),
    borderBottomLeftRadius: scale(25),
    borderBottomRightRadius: scale(25),
  },
  headerTextView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  headerText: {
    ...FONTS.hBold2,
    color: color.white,
  },
  userImage: { width: scale(28), height: scale(28), bottom: 10 },
  dateView: {
    paddingBottom: scale(20),
    backgroundColor: color.primary,
  },
  dateText: {
    ...FONTS.bodyLight1,
    color: color.white,
  }
});
