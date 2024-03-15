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

import { Profile } from "./pages/Profile/Profile";
import { Happening } from "./pages/Happenings/Happenings";
import { EventInfo } from "./pages/EventInfo/EventInfo";
import { CreateHappening } from "./pages/CreateHappening/CreateHappening";
import { Location } from "./pages/Location/Location";
import { LocationProfile } from "./pages/LocationProfile/LocationProfile";
import { ComingSoon } from "./pages/ComingSoon/ComingSoon";
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
              initialRouteName="Happening"
            >
              <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
              <Stack.Screen
                name="Happening"
                component={Happening}
              ></Stack.Screen>
              <Stack.Screen
                name="EventInfo"
                component={EventInfo}
              ></Stack.Screen>
              <Stack.Screen
                name="CreateHappening"
                component={CreateHappening}
              ></Stack.Screen>
              <Stack.Screen
                name="LocationProfile"
                component={LocationProfile}
              ></Stack.Screen>
              <Stack.Screen name="Location" component={Location}></Stack.Screen>
              <Stack.Screen
                name="ComingSoon"
                component={ComingSoon}
              ></Stack.Screen>
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
