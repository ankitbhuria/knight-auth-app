import React from "react";
import { useTheme, themeColor, Text } from "react-native-rapi-ui";
const TabBarText = (props)=>{

    return(
        <Text style={{marginBottom: 6}} size={24} color={props.focused ? theme ? themeColor.white100 : primary : "rgb(143, 155, 179)"}>{props.name}</Text>
    )
}
export default TabBarText;