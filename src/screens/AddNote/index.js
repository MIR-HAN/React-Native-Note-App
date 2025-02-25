import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { screenStyle } from '../../styles/screenStyle';
import Button from '../../components/ui/button';
import EditButtons from '../../components/addNotes/editButtons';
import { appColors } from '../../theme/color';
import { useNavigation } from '@react-navigation/native';


const AddNote = ({ route, navigation }) => {

  const { note } = route?.params;
  const { type } = route?.params;
  const [title, setTitle] = useState(note?.title)
  const [titleRequired, setTitleRequired] = useState(false)
  const [descRequired, setDescRequired] = useState(false)
  const [description, setDescription] = useState(note.description)
  const addNote = route?.params?.addNote;
  const updateNote = route?.params?.updateNote;


  return (
    <SafeAreaView style={screenStyle.container}>

      <View style={screenStyle.container}>


        <View style={{ flex: 1, padding: 5 }}>

          <Text style={{ fontWeight: "bold", fontSize: 16, paddingHorizontal: 8, marginTop: 15 }}>Title</Text>

          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={{
              backgroundColor: appColors.White,
              margin: 8,
              padding: 5,
              borderWidth: 0.5,
              borderRadius: 5,
              borderColor: appColors.Gray,
              height: 35,


            }}

          />
          {
            titleRequired &&
            <Text style={{ fontWeight: "bold", fontSize: 16, paddingHorizontal: 8, marginVertical: 10, color: appColors.Red }}>Please fill the title area</Text>}

          <Text style={{ fontWeight: "bold", fontSize: 16, paddingHorizontal: 8 }}>Description</Text>
          <TextInput
            placeholder="Enter Note"
            value={description}
            onChangeText={(text) => setDescription(text)}
            style={{
              backgroundColor: appColors.White,
              margin: 8,
              padding: 5,
              borderWidth: 0.5,
              borderRadius: 5,
              borderColor: appColors.Gray,
              height: 90

            }}

          />
          {
            descRequired &&
            <Text style={{ fontWeight: "bold", fontSize: 16, paddingHorizontal: 8, marginVertical: 10, color: appColors.Red }}>Please fill the description area</Text>
          }
        </View>

        <View>


        </View>


        <Button
          onPress={() => {
            if (!title.trim()) {
              setTitleRequired(true);
              return; 
            }
            setTitleRequired(false); 

            if (!description.trim()) {
              setDescRequired(true);
             
            }
            setDescRequired(false);

            if (type === "update" && updateNote ) {
          
              updateNote(note.id, {
                title: title,
                description: description,
                date: new Date().toLocaleTimeString(),
              });
            } else if (addNote) {
              const newNote = {
                id: Math.floor(Math.random() * 100),
                title: title,
                description: description,
                date: new Date().toLocaleTimeString(),
              };
              addNote(newNote);
            }
            navigation.goBack();
          }}
          title={type === "update" ? "Update" : "Save"}
        />


      </View>


    </SafeAreaView>

  );
};



export default AddNote;