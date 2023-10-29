import React from "react"
import AnIcon from "react-native-vector-icons/AntDesign"
import IonIcon from "react-native-vector-icons/Ionicons"
import Octicons from "react-native-vector-icons/Octicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Entypo from "react-native-vector-icons/Entypo"
import Fontisto from "react-native-vector-icons/Fontisto"
import { Pressable, View } from "react-native"

export const IconSet = ({
    anIcon,
    ionicon,
    fontAwesome,
    fontAwesome5,
    feather,
    entypo,
    fontisto,
    materialCommunityIcons, 
    simpleLineIcons,
    materialIcons,
    octicons,
    style,
    name,
    onPress,
    color,
    size,
    
}) => {

    return (
        <Pressable onPress={onPress}>
            <>
                { anIcon && <AnIcon name={name || "menu"} size={size || 20} color={color || "red"} style={style} /> }
            </>
            <>
                { ionicon && <IonIcon name={name || "menu"} size={size || 20} color={color || "red"} style={style} /> }
            </>
            <>
                { fontAwesome && <FontAwesome name={name || "pencil"} size={size || 20} color={color || "red"} style={style} /> }
            </>
            <>
                { fontAwesome5 && <FontAwesome5 name={name || "bomb"} size={size || 20} color={color || "red"} style={style} /> }
            </>
            <>
                { entypo && <Entypo name={name || "aircraft-take-off"} size={size || 20} color={color || "red"} style={style} /> }
            </>
            <>
                { feather && <Feather name={name || "gratipay"} size={size || 20} color={color || "red"} style={style} /> }
            </>
            <>
                { materialCommunityIcons && <MaterialCommunityIcons name={name || "menu"} size={size || 20} color={color || "red"} style={style} /> }
            </>
            <>
                { simpleLineIcons && <SimpleLineIcons name={name || "menu"} size={size || 20} color={color || "red"} style={style} /> }
            </>
            <>
                { materialIcons && <MaterialIcons name={name || "menu"} size={size || 20} color={color || "red"} style={style} /> }
            </>
            <>
                { fontisto && <Fontisto name={name || "radio-btn-active"} size={size || 20} color={color || "red"} style={style} /> }
            </>
            <>
                { octicons && <Octicons name={name || "clock"} size={size || 20} color={color || "red"} style={style} /> }
            </>
           
        </Pressable>
    )

}