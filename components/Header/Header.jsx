import { s } from "./Header.styles";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image } from "react-native";
import { Txt } from "../DCText/Txt/Txt";
import { HeaderText } from "../DCText/HeaderText/HeaderText";

export function Header() {
  const nav = useNavigation();
  return (
    <View style={s.container}>
      <View style={s.logoContainer}>
        <TouchableOpacity onPress={() => nav.navigate("Happening")}>
          <Image
            style={s.headerlogo}
            source={require("../../assets/dc_logo.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={s.linkContainer}>
        <View>
          <TouchableOpacity onPress={() => nav.navigate("Happening")}>
            <HeaderText style={s.headerTxt}>Happenings</HeaderText>
          </TouchableOpacity>
        </View>
        <View>
          <HeaderText style={s.headerTxt}>Venues</HeaderText>
        </View>
      </View>
      <Image
        style={s.headerImg}
        source={require("../../assets/DCsearch.png")}
      />
    </View>
  );
}
