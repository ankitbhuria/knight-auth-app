import React from "react";
import { useTheme, themeColor } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

const TabBarIcon = ({icon, focused})=>{
    const {theme, setTheme} = useTheme();
    
    return(
        <Ionicons name={icon} size={20} color={focused ? theme ? themeColor.white100 : primary : "rgb(143, 155, 179)"} />
    )
}
export default TabBarIcon;