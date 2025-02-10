
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ADDNOTE, MYNOTES, NOTEDETAIL } from '../utils/routes';
import MyNotes from '../screens/myNotes';
import NoteDetail from '../screens/noteDetail';
import AddNote from '../screens/AddNote';
import { appColors } from '../theme/color';
import HeaderRight from '../components/ui/headerRight';


const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (

    <Stack.Navigator screenOptions={{
      headerBackTitle: "Back",
      headerTintColor: appColors.Secondary
    }} >

      <Stack.Screen
        options={{ headerShown: false }}
        name={MYNOTES} component={MyNotes} />

      <Stack.Screen
        options={{
          headerRight: (props) => (
            <HeaderRight />
          )
        }}
        name={ADDNOTE} component={AddNote} />

      <Stack.Screen name={NOTEDETAIL} component={NoteDetail} />
    </Stack.Navigator>

  );
}