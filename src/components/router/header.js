import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { screenHeight } from '../../utils/constants';
import { MYNOTES } from '../../utils/routes';
import { appColors } from '../../theme/color';
import { HambergerMenu, SearchNormal1 } from 'iconsax-react-native';


const Header = () => {
  return (
    <View style={styles.container}>

      <View style={{
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,

      }}>
        <Text style={{
          fontSize: 35,
          color: appColors.Secondary,
        }}>{MYNOTES}</Text>
      </View>

      *************

      <View style={{

        paddingVertical: 10,
        flexDirection: "row",
        justifyContent:"space-between",
        marginHorizontal:10,
        
       
      }}>

        <View style={{  padding: 5, justifyContent: "start", }}>
          <HambergerMenu size="26" color={appColors.Secondary} />
        </View>

        <View style={{ padding:5, }}>
          <SearchNormal1 size="26" color={appColors.Secondary} />
        </View>


      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: screenHeight * 0.2,

  },


});

export default Header;