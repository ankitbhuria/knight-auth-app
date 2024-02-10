import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
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
function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState("");
  const auth = getAuth();
  const { theme, setTheme } = useTheme();


  // Register Handler
  const register = async () => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, pass).catch((err) => {
      var errMsg = err.message;
      setLoading(false);
      alert(errMsg);
    });
  };

  return (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <Layout>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              resizeMethod="resize"
              style={{ width: 220, height: 220 }}
              source={require("../../../assets/register.png")}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              paddingBottom: 20,
              backgroundColor:
                theme == "dark" ? themeColor.dark : themeColor.white,
            }}
          >
            <Text style={{ alignSelf: "center", padding: 30 }} size="h3">
              {" "}
              Register
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
            <Text style={{ marginTop: 15 }}>Passwords</Text>
            <TextInput
              placeholder="Enter your Password"
              containerStyle={{ marginTop: 15 }}
              autoComplete="off"
              autoCapitalize="none"
              autoCorrect={false}
              value={pass}
              onChangeText={(text) => setPass(text)}
              secureTextEntry={true}
            />
            <Button
              text={loading ? "Loading" : "Create an Account"}
              style={{ marginTop: 20 }}
              onPress={() => register()}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
            >
              <Text size="md">Already have an account ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text size="md" fontWeight="bold">
                  {" "}
                  Login
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
}

export default Register;
