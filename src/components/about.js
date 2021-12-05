import React from "react";
import {Flex, Box, Text, Image, Center} from "@chakra-ui/react";

export default function About() {
    return (
        <Flex direction="column" justify="center" align="center" mb="7rem">
            <Text fontSize='5xl' color="primary.800" pb="35px" fontWeight={"bolder"}>
                {">> "} About Us {" <<"}
            </Text>

            <Box>
                <Flex
                    direction="row"
                    justify="space-between"
                    align="center"
                >
                    <Center w="50%">
                        <Image
                            src="https://via.placeholder.com/350x350"
                            alt="d4rkc0de"
                            pr="30px"
                        />
                    </Center>
                    <Text maxW={"50%"}>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </Text>
                </Flex>
            </Box>
        </Flex>
    );
}
