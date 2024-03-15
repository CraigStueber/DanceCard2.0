import { s } from "./Home.styles";
import { Txt } from "../../components/DCText/Txt/Txt";
import { ScrollView } from "react-native";
export function Home() {
  return (
    <ScrollView style={s.container}>
      <Txt>Test</Txt>
    </ScrollView>
  );
}
