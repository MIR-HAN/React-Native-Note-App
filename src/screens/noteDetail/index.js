import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { screenStyle } from '../../styles/screenStyle';
import Button from '../../components/ui/button';
import EditButtons from '../../components/addNotes/editButtons';
import { appColors } from '../../theme/color';
import App from '../../../App';


const NoteDetail = ({ route }) => {

  const { note } = route?.params

  return (
    <SafeAreaView style={screenStyle.container}>

      <View style={screenStyle.container}>

        <View>
          <EditButtons />
        </View>

        <View style={{ flex: 1, backgroundColor: appColors.White,}}>

        <View >
              <Text>Header</Text>
              <Text>Header</Text>
            </View>


        </View>

      </View>

    </SafeAreaView>

  );
};



export default NoteDetail;