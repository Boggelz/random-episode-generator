import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DirectoryScreen from "./screens/DirectoryScreen";
import TheOffice from "./screens/TheOffice";
import ParksAndRec from "./screens/ParksAndRec";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DirectoryScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="DirectoryScreen" component={DirectoryScreen} />
        <Stack.Screen name="TheOffice" component={TheOffice} />
        <Stack.Screen name="ParksAndRec" component={ParksAndRec} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
