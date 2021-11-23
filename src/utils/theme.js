import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#03A062",
    200: "#03A062",
    300: "#03A062",
    400: "#03A062",
    500: "#03A062",
    600: "#03A062",
    700: "#03A062",
    800: "#03A062",
    900: "#03A062"
  }
};
const config = {
  initialColorMode: "dark",
  // useSystemColorMode: true,
}
const customTheme = extendTheme({ colors, config });

export default customTheme;
