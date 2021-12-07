import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#00F40A",
    200: "#00F40A",
    300: "#00F40A",
    400: "#00F40A",
    500: "#00F40A",
    600: "#00F40A",
    700: "#00F40A",
    800: "#00F40A",
    900: "#00F40A",
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
  }, colors, config,
  components: {
    Text: {
      baseStyle: {
        fontSize: "xl"
      },
    },
  }
})


export default customTheme;
