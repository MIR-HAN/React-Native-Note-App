import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { appColors } from '../../theme/color';
import { TextBlock, TextBold, TextUnderline, TextalignCenter, TextalignLeft, TextalignRight } from 'iconsax-react-native';

const EditButton = () => {

  const btnArray = [
    {
      id: 1,
      name: "bold",
      icon: <TextBold size="30" color={appColors.Secondary} />
    },
    {
      id: 2,
      name: "italic",
      icon: <TextBlock size="32" color={appColors.Secondary} />
    },
    {
      id: 3,
      name: "underline",
      icon: <TextUnderline size="32" color={appColors.Secondary} />
    },
    {
      id: 4,
      name: "strikethrough",
      icon: <TextalignCenter size="32" color={appColors.Secondary} />
    },
    {
      id: 5,
      name: "color",
      icon: <TextalignLeft size="32" color={appColors.Secondary}/>
    },
    {
      id: 6,
      name: "color",
      icon: <TextalignRight size="32" color={appColors.Secondary}/> 
    }

  ]


  return (
    <View style={styles.container}>
      {
        btnArray.map((item, i) => (
          <TouchableOpacity key={item.id}>
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

export default EditButton;