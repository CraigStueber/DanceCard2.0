import { s } from "./ComingSoon.styles";
import { View, Text } from "react-native";
import { Txt } from "../../components/DCText/Txt/Txt";

export function ComingSoon({}) {
  return (
    <View style={s.container}>
      <Txt style={s.comingText}>FEATURE</Txt>
      <Txt style={s.comingText}>COMING</Txt>
      <Txt style={s.comingText}>SOON</Txt>
    </View>
  );
}
