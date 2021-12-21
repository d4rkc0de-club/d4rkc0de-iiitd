import React from "react";
import {Flex, Box, Text, } from "@chakra-ui/react";

export default function Join() {
    return (
        <Flex direction="column" justify="center" align="center" mb="7rem">
            <Text fontSize='5xl' color="primary.800" pb="35px" fontWeight={"bolder"}>
                {">> "} Join Us {" <<"}
            </Text>

            <Box>
                <Text>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Text>
            </Box>
        </Flex>
    );
}
