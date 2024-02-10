import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import {
  Layout,
  Text,
  TextInput,
  Button,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";

const ForgotPassword = ({ navigation }) => {
  const { theme, setTheme } = useTheme();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState();
  const auth = getAuth();
  // Reset Handler
  const reset = async () => {
    setLoading(true);
    await sendPasswordResetEmail(auth, email).then(() => {
        setLoading(false);
        navigation.navigate("Login");
        alert(
          "Your reset password link has been successfully sent to your email :)"
        );
      })
      .catch((err) => {
        setLoading(false);
        var errMsg = err.message;
        alert(errMsg);
      })
      
  };
  return (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <Layout>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              paddingBottom: 20,
              backgroundColor:
                theme == "dark" ? themeColor.dark : themeColor.white,

              justifyContent: "center",
            }}
          >
            <Text style={{ alignSelf: "center", padding: 30 }} size="h3">
              {" "}
              Forgot Password
            </Text>
            <Text>Email</Text>
            <TextInput
              placeholder="Enter your Email"
              containerStyle={{ marginTop: 15 }}
              keyboardType="email-address"
              autoComplete="off"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Button
              text={loading ? "loading" : "Forgot Password"}
              style={{ marginTop: 20 }}
              onPress={() => reset()}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
            >
              <Text size="md">Dont't Have an account ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text size="md" fontWeight="bold">
                  {" "}
                  Register
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  theme == "dark" ? setTheme("light") : setTheme("dark");
                }}
              >
                <Text style={{ marginLeft: 5 }} size="md">
                  {theme == "dark" ? "Light Theme" : "Dark Theme"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
