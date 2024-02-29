import { Text, useWindowDimensions } from "react-native";
import { s } from "./Txt.styles";
const PHONE_RATIO = 0.001194834123222749;

export function Txt({ children, style, ...restProps }) {
  const fontSize = style?.fontSize || s.txt.fontSize;
  const { height } = useWindowDimensions();
  return (
    <Text
      style={[
        s.txt,
        style,
        { fontSize: Math.round(fontSize * PHONE_RATIO * height) },
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
}
