import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import Header from "../sections/Header";

export default function LandingLayout(props) {
  return (
      <Box>
        <Header/>
          <Flex
            direction="column"
            align="center"
            maxW={{ xl: "1200px" }}
            m="0 auto"
            {...props}
          >
            {props.children}
          </Flex>
      </Box>
  );
}
