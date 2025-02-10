import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { appColors } from '../../theme/color';
import { screenWidth } from '../../utils/constants';
import { Edit, Trash } from 'iconsax-react-native';
import { NoteCardStyles } from '../../styles/myNotesStyles';
import { useNavigation } from '@react-navigation/native';
import MyNotes from '../../screens/myNotes';
import NoteDetail from '../../screens/noteDetail';
import { NOTEDETAIL } from '../../utils/routes';


const NoteCard = ({ item, deleteNote, updateNote }) => {



    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(NOTEDETAIL, { note: item })}
            style={NoteCardStyles.container}>

            <View style={NoteCardStyles.bubleContainer}>

                <View style={NoteCardStyles.buble}>

                </View>
            </View>

            <View style={NoteCardStyles.noteContainer} >
                <Text style={NoteCardStyles.title}>{item.title}</Text>
                <Text style={NoteCardStyles.description}>{item.description}</Text>
                <Text style={NoteCardStyles.date}>{item.date}</Text>
            </View>

            <TouchableOpacity style={NoteCardStyles.trushButtonContainer} >
                <Trash
                    onPress={() => deleteNote(item.id)}
                    size="24" variant='Bold' color={appColors.Red} />
            </TouchableOpacity>

            <TouchableOpacity style={NoteCardStyles.trushButtonContainer} >
                <Edit
                    onPress={() => updateNote(item.id, item)}
                    size="24" variant='Bold' color={appColors.Primary} />
            </TouchableOpacity>



        </TouchableOpacity>
    );
};



export default NoteCard;