import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      {/* <Text fontSize="lg" fontWeight="bold">
        Logo test
      </Text> */}
      <Image src="https://www.linkpicture.com/q/logo_88.jpg" size='100%'/>
    </Box>
  );
}
