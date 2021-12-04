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
    900: "#03A062",
    940: "#03F405",
    950: "#2F2F2F",
  }
};
const config = {
  initialColorMode: "dark",
  
  // useSystemColorMode: true,
}
const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black',
      },
    },
  }, colors, config });

export default customTheme;
