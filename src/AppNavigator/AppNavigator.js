import React, { useContext } from "react";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Screens/Home.js";
import Profile from "../Screens/Profile.js";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarText from "../components/Tabs/TabBarText.js";
import TabBarIcon from "../components/Tabs/TabBarIcon.js";
import { useTheme, themeColor } from "react-native-rapi-ui";
import Call from "../Screens/Call.js";
import { getAuth } from "firebase/auth";
import { getApps, initializeApp } from "firebase/app";
import Login from "../Screens/AuthScreen/Login.js";
import Register from "../Screens/AuthScreen/Register.js";
import ForgotPassword from "../Screens/AuthScreen/ForgotPassword.js";
import { AuthContext } from "../AuthContext/AuthProvider.js";
import Loading from "../Screens/utils/Loading.js";
const StackNavigator = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();
// FireBase Initialisation
const firebaseConfig = {
  apiKey: "AIzaSyBxe8kfp3TStrW3PUEInyYF8LS5QpxXQrI",
  authDomain: "tutdude-app.firebaseapp.com",
  projectId: "tutdude-app",
  storageBucket: "tutdude-app.appspot.com",
  messagingSenderId: "1022772136099",
  appId: "1:1022772136099:web:e0be089cb8e5cdb3495716",
  measurementId: "G-GS2QFLNB8M",
};

if (getApps().length === 0) {
  const app = initializeApp(firebaseConfig)
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
};

const Main = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderBlockColor:
            theme == "dark" ? themeColor.white : themeColor.black,
          borderTopColor: theme == "dark" ? themeColor.white : themeColor.black,
          backgroundColor:
            theme == "dark" ? themeColor.black : themeColor.white,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarLabel: ({ focused }) => <TabBarText name="Home" />,
          tabBarIcon: ({ focused }) => <TabBarIcon icon={"home-outline"} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarLabel: ({ focused }) => <TabBarText name="Profile" />,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={"person-circle-outline"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Call"
        component={Call}
        options={{
          title: "Call",
          tabBarLabel: ({ focused }) => <TabBarText name="Call" />,
          tabBarIcon: ({ focused }) => <TabBarIcon icon={"call"} />,
        }}
      />
    </Tabs.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="MainTabs"
        screenOptions={{ headerShown: false }}
      >
        <StackNavigator.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ title: "MainTabs" }}
        />
        <StackNavigator.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <StackNavigator.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};

const MainNavigator = () => {
  const auth = useContext(AuthContext);
  const user = auth.user;

  return (
    <NavigationContainer>
      {user === null && <Loading />}

      {user === false && <Auth />}
      {user === true && <Main />}
    </NavigationContainer>
  );
};

export default MainNavigator;
