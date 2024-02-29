import { s } from "./Header.styles";
import { View, Image } from "react-native";
import { Txt } from "../DCText/Txt/Txt";
import { HeaderText } from "../DCText/HeaderText/HeaderText";

export function Header() {
  return (
    <View style={s.container}>
      <View style={s.logoContainer}>
        <Image
          style={s.headerlogo}
          source={require("../../assets/dc_logo.png")}
        />
      </View>
      <View style={s.linkContainer}>
        <View>
        
          <HeaderText style={s.headerTxt}>Happenings</HeaderText>
        </View>
        <View>
       
          <HeaderText style={s.headerTxt}>Venues</HeaderText>
        </View>
      </View>
      <Image
        style={s.headerImg}
        source={require("../../assets/icons/DCshopping.png")}
      />
    </View>
  );
}
