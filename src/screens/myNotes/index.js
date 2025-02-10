import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { screenStyle } from '../../styles/screenStyle';
import Header from '../../components/router/header';
import FloatActionButton from '../../components/ui/floatActionButton';
import { mockData } from '../../utils/mockData';
import NoteCard from '../../components/myNotes/noteCard';
import { ADDNOTE } from '../../utils/routes';


const MyNotes = ({ navigation }) => {

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Design engineer',
      description: 'This is the first note',
      date: "12:45 pm",
    },

    {
      id: 2,
      title: 'Software engineer',
      description: 'This is the second note',
      date: "1:30 pm",
    },

    {
      id: 3,
      title: 'Product manager',
      description: 'This is the third note',
      date: "3:00 pm",
    },

    {
      id: 4,
      title: 'Project manager',
      description: 'This is the fourth note',
      date: "5:00 pm",
    }
  ])

  let Note1 = {
    id: 5,
    title: 'Back and Developer',
    description: 'This is the fifth note',
    date: "5:00 pm",
  }

  let Note2 = {

    id: 6,
    title: 'Mobile Developer',
    description: 'This is the sixth note',
    date: "5:00 pm",
  }
  let Note3 = {

    id: 7,
    title: 'Frontend Developer',
    description: 'This is the seventh note',
    date: "5:00 pm",
  }

  const addNote = (item) => {

    if (item) {
      setNotes([...notes, item])
    }

  }

  const deleteNote = (id) => {

    const filtered = notes.filter((note) => note.id !== id)

    setNotes(filtered)

  }

  const updateNote = (id, item) => {

    const updatedItem = notes.map((note) => note.id === id ?
      { ...note, title: "new title" } : note)

    setNotes(updatedItem)

  }

  useEffect(()=>{

    setTimeout(()=>{

      setNotes([...notes, Note2])
    }, 4000)

    
  },[])

  return (
    <SafeAreaView style={screenStyle.container}>

      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={notes}
          keyExtractor={item => item.id}
          renderItem={({ item}) => (
            <NoteCard 
            item={item}
             deleteNote={deleteNote}
             updateNote={updateNote}
             
             />
          )}
        />
        <FloatActionButton
           onPress={() => navigation.navigate(ADDNOTE, { title: "serhat" })} 
         // onPress={() => addNote(Note2)}
        />
      </View>


    </SafeAreaView>

  );
};




export default MyNotes;