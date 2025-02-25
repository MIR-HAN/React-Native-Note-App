import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, } from 'react-native';
import { screenStyle } from '../../styles/screenStyle';
import { appColors } from '../../theme/color';
import EditButtons from '../../components/addNotes/editButtons';


const NoteDetail = ({ route }) => {

  const [selectStyle, setSelectStyle] = useState()


  const { note } = route?.params

console.log(selectStyle)
  return (
    <SafeAreaView style={screenStyle.container}>

      <View style={screenStyle.container}>

        <View>
          <EditButtons
        
            onChangeStyle={(value) => setSelectStyle(styles[value])}

          />
        </View>

        <View style={{ flex: 1, backgroundColor: appColors.White, padding: 10 }}>

          <View >
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Header</Text>
            <Text style={{ fontSize: 24, fontWeight: "500", color: appColors.Primary }}>{note.title}</Text>
          </View>

          <View >
            <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 10 }}>Note</Text>
            <Text
              style={[{ fontSize: 16, fontWeight: "300", color: appColors.Secondary }, selectStyle]}>{note.description}</Text>
          </View>


        </View>

      </View>

    </SafeAreaView>

  );
};


const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },

  italic: {
    fontStyle: "italic",
  },

  textUnderline: {
    textDecorationLine: "underline",
  },

  left: {
    textAlign: "left",
  },

  right: {
    textAlign: "right",
  },

  center: {
    textAlign: "center",
  },
  normal: {
    fontWeight: "bold"
  }

});


export default NoteDetail;

