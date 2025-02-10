import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { screenStyle } from '../../styles/screenStyle';
import Button from '../../components/ui/button';
import EditButtons from '../../components/addNotes/editButtons';
import { appColors } from '../../theme/color';


const AddNote = ({ route }) => {



  return (
    <SafeAreaView style={screenStyle.container}>

      <View style={screenStyle.container}>

        <View>
          <EditButtons />
        </View>

        <View style={{ flex: 1, }}>

          <TextInput
            placeholder="Enter Note"
            style={{
              flex: 1,
              backgroundColor: appColors.White,
              margin: 8,
              padding: 5,
              borderWidth: 0.5,
              borderRadius: 5,
              borderColor: appColors.Gray,

            }}
          // onChangeText={onChangeText}
          //value={}
          />

        </View>

        <View>



        </View>


        <Text></Text>

        <Button title="Save Change" />
      </View>


    </SafeAreaView>

  );
};



export default AddNote;