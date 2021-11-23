import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";

export default function Join() {
    return (
        <Flex direction="column" justify="center" align="center">
            <Text>Join Us</Text>
            <Box>
                <Flex
                    direction="row"
                    justify="space-between"
                    align="center"
                >
                    <Text>
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur, quisquam.
                    </Text>
                    <Image
                        src="https://via.placeholder.com/350x350"
                        alt="d4rkc0de"
                    />
                </Flex>
            </Box>
        </Flex>
    );
}