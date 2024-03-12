import { s } from "./EventInfo.styles";

import { Txt } from "../../components/DCText/Txt/Txt";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
export function EventInfo() {
  const { params } = useRoute();
  return (
    <ScrollView style={s.container}>
      <Txt>{params.item.name}</Txt>
    </ScrollView>
  );
}
