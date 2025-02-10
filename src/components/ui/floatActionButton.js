import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { screenWidth } from '../../utils/constants';
import { appColors } from '../../theme/color';
import { Add } from 'iconsax-react-native';

const FloatActionButton = ( props ) => {
  return (
    <TouchableOpacity
    {...props}
      style={styles.container}>
      <Add size="50" color={appColors.White} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.Primary,
    position: "absolute",
    bottom: 20,
    right: 20,
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
    borderRadius: 50,
  },

});

export default FloatActionButton;