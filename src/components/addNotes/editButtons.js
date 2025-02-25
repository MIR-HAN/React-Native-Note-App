import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { appColors } from '../../theme/color';
import { TextBlock, TextBold, TextUnderline, TextalignCenter, TextalignLeft, TextalignRight } from 'iconsax-react-native';

const EditButtons = ({ onChangeStyle }) => {

 const btnArray = [
  { id: 1, value: "bold", icon: <TextBold size="30" color={appColors.Secondary} /> },
  { id: 2, value: "italic", icon: <TextBlock size="32" color={appColors.Secondary} /> },
  { id: 3, value: "textUnderline", icon: <TextUnderline size="32" color={appColors.Secondary} /> },
  { id: 4, value: "left", icon: <TextalignLeft size="32" color={appColors.Secondary} /> },
  { id: 5, value: "center", icon: <TextalignCenter size="32" color={appColors.Secondary} /> },
  { id: 6, value: "right", icon: <TextalignRight size="32" color={appColors.Secondary} /> }
];


  return (
    <View style={styles.container}>
      {
        btnArray.map((item, i) => (
          <TouchableOpacity
            onPress={() => onChangeStyle(item.value)}
            key={item.id}>
            {item.icon}

          </TouchableOpacity>
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: appColors.Gray,
    padding: 5,
    paddingVertical: 10,
    justifyContent: "space-around",
  },

});

export default EditButtons;