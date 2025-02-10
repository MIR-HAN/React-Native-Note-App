
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { appColors } from '../../theme/color';
import { Folder, More, Share } from 'iconsax-react-native';

const HeaderRight = () => {
    return (
        <View style={styles.container}>
            <Folder
            style={styles.icon}
            size="24" color={appColors.Secondary}/>
            <Share 
            style={styles.icon}
            size="24" color={appColors.Secondary}/>
            <More
            style={styles.icon}
            size="24" color={appColors.Secondary}/>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon:{
        marginHorizontal:5,
    }

});

export default HeaderRight;