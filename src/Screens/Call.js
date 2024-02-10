import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import {
  Button,
  Layout,
  Section,
  Text,
  SectionContent,
  TopNav,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";

const Call = () => {
  const navigation = useNavigation();
  const { theme, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={theme == "dark" ? themeColor.white100 : themeColor.black100}
          />
        }
        leftAction={() => navigation.goBack()}
        middleContent="Profile"
        rightContent={
          <Ionicons
            name={theme == "dark" ? "moon" : "sunny"}
            size={20}
            color={theme == "dark" ? themeColor.white100 : themeColor.black100}
          />
        }
        rightAction={() => {
          if (theme == "dark") setTheme("light");
          else setTheme("dark");
        }}
      />
    </Layout>
  );
};
export default Call;