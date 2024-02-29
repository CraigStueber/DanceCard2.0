import { s } from "./App.styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import { Txt } from "./components/DCText/Txt/Txt";
import { HeaderText } from "./components/DCText/HeaderText/HeaderText";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./pages/Home/Home";

const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
  const [isFontLoaded] = useFonts({
    "Konnet-Italic": require("./assets/fonts/Konnect-BlackItalic.otf"),
    "Konnet-ExtraBold": require("./assets/fonts/Konnect-ExtraBold.otf"),
    "Konnet-Regular": require("./assets/fonts/Konnect-Regular.otf"),
  });
  return (
    <NavigationContainer theme={navTheme}>
      <SafeAreaProvider>
        {isFontLoaded && (
          <SafeAreaView style={s.container}>
            <View style={s.header}>
              <Header />
            </View>
            <Stack.Navigator
              screenOptions={{ headerShown: false, animation: "fade" }}
              initialRouteName="Home"
            >
              <Stack.Screen name="Home" component={Home}></Stack.Screen>
            </Stack.Navigator>
            <View style={s.footer}>
              <Footer />
            </View>
          </SafeAreaView>
        )}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
