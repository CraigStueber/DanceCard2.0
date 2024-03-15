import { TouchableOpacity, Image, View, Text } from "react-native";
import { Txt } from "../DCText/Txt/Txt";
import { s } from "./LocationCard.styles";

import { useNavigation } from "@react-navigation/native";
import { fetchIcon } from "../../utils/iconfunction";
export function LocationCard({ location }) {
  const nav = useNavigation();
  let icon = fetchIcon(location.icon);
  const imageUri = location.image;
  return (
    <View style={s.container}>
      <Image source={icon} style={s.locationLogo} />
      <View style={s.locationNameContainer}>
        <Txt style={s.locationName}>{location.name}</Txt>
        <TouchableOpacity
          style={s.locationBtn}
          onPress={() => nav.navigate("LocationProfile", { location })}
        >
          <Txt style={s.btnText}>Location Info</Txt>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.eventBtn}
          onPress={() => nav.navigate("Happening")}
        >
          <Txt style={s.btnText}>Search Events</Txt>
        </TouchableOpacity>
      </View>
    </View>
  );
}
