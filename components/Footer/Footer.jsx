import { s } from "./Footer.styles";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image } from "react-native";
import { Txt } from "../DCText/Txt/Txt";

export function Footer() {
  const nav = useNavigation();
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.iconFooters}>
        <Image
          style={s.footerIcons}
          source={require("../../assets/DCfriends.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={s.iconFooters}>
        <Image
          style={s.footerIcons}
          source={require("../../assets/DCcalendar.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity style={s.midView}>
        <Image
          style={s.footerMidIcon}
          source={require("../../assets/DCplus.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={s.iconFooters}>
        <Image
          style={s.footerIcons}
          source={require("../../assets/DCmessage.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={s.iconFooters}
        onPress={() => nav.navigate("Profile")}
      >
        <Image
          style={s.profileFooters}
          source={{
            uri: "https://inoxtkubxynhbuslvgyv.supabase.co/storage/v1/object/public/avatar/craigAvatar.jpg",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
