import { StyleSheet } from "react-native";
import { appColors } from "../theme/color";
import { screenWidth } from "../utils/constants";



const NoteCardStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.White,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.26,
        shadowRadius: 2.68,

        elevation: 11,
        flexDirection: "row",
    },
    bubleContainer: {
        flex: 1,
        alignItems: "center",
    },
    buble:{
        width:screenWidth*0.03, 
        height:screenWidth*0.03,
         backgroundColor:appColors.Gray, 
         borderRadius:100
    },

    noteContainer:{
        flex:8,
    },

    title:{
        fontSize:18,
         fontWeight:"bold",
          color:appColors.Secondary
    },

    description:{
        fontSize:14,
         color:appColors.Gray,
         marginVertical:5
    },

    date:{
        fontSize:14, color:appColors.Gray, marginVertical:5
    },

    trushButtonContainer:{
        flex:1,justifyContent:"flex-end", alignItems:"center" 
    }

});

export { NoteCardStyles };