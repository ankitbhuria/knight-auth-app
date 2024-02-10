import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Linking } from "react-native";
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
import { getAuth, signOut } from "firebase/auth";
const Home = () => {
  const navigation = useNavigation();
  const { theme, setTheme } = useTheme();
  const auth = getAuth();
  return (
    <Layout>
      <TopNav
        leftContent={
          <Ionicons
            name="menu-outline"
            size={24}
            color={theme == "dark" ? themeColor.white100 : themeColor.primary900}
          />
        }
        middleContent="Home"
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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Components made with Rapid UI
            </Text>
            <Button
              status="info"
              style={{ marginTop: 10 }}
              text="Upgrader Boy"
              onPress={() =>
                Linking.openURL("https://upgraderboy18.blogspot.com")
              }
            />
            {/* <Button status="success" style={{marginTop: 10}} text="You are mine" /> */}
            <Button
              status="warning"
              style={{ marginTop: 10 }}
              text="Profile"
              onPress={() => navigation.navigate("Profile")}
            />
            <Button
              status={theme == "dark" ? "success" : "dark"}
              style={{ marginTop: 10 }}
              text={theme == "dark" ? "Light" : "dark"}
              onPress={() => {
                if (theme == "dark") setTheme("light");
                else setTheme("dark");
              }}
            />
            <Button
              status="danger"
              style={{ marginTop: 10 }}
              text="Sign out"
              onPress={()=>signOut(auth)}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
};

export default Home;
