import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const { theme, setTheme } = useTheme();
  
  
  // Login Handler
  const login = async () => {
    setLoading(true);

    await signInWithEmailAndPassword(auth, email, pass).catch((err) => {
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
              source={require("../../../assets/login.png")}
            />
          </View>
          <View
            style={{
              flex: 3,
              paddingHorizontal: 20,
              paddingBottom: 20,
              backgroundColor:
                theme == "dark" ? themeColor.dark : themeColor.white,
            }}
          >
            <Text style={{ alignSelf: "center", padding: 30 }} size="h3">
              Login
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
              text={loading ? "Loading" : "Login"}
              style={{ marginTop: 20 }}
              onPress={() => login()}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
            >
              <Text size="md">Forgot Your Password ?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text size="md" fontWeight="bold">
                  {" "}
                  Forgot Password
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

export default Login;
