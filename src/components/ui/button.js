import React from 'react';
import {  Text, StyleSheet, TouchableOpacity } from 'react-native';
import { appColors } from '../../theme/color';

const Button = (prop) => {

    const {title}=prop

  return (
    <TouchableOpacity
    {...prop}
    style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:appColors.Primary,
    padding:10,
    paddingVertical:15,
    borderRadius:8
  },
  title:{
    color:appColors.White,
    fontSize:16,
    fontWeight:600
  
  }

});

export default Button;