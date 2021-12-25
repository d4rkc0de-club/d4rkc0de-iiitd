import React from "react";
import {Flex, Box, Text, Image, Center} from "@chakra-ui/react";

export default function About() {
    return (
        <Flex direction="column" justify="center" align="center" mb="7rem" id="about">
            <Text fontSize={{md:'5xl', base: '4xl'}} color="primary.800" pb="35px" fontWeight={"bolder"}>
                {">> "} About Us {" <<"}
            </Text>

            <Box>
                <Flex
                    direction={{md:"row", base:"column"}}
                    justify="space-between"
                    align="center"
                    wrap="wrap"
                >
                    <Center maxW={["100%", "50%"]} mb={[9,0]}>
                        <Image
                            src="https://i.imgur.com/bqGqvFk.png"
                            alt="d4rkc0de"
                            pr="30px"
                            maxW={["80%", "100%"]}
                            px={["1rem", "4rem"]}
                        />
                    </Center>
                    <Text maxW={["100%","50%"]}>
                        It’s a general notion that Computer Science and Technology is just about coding. We often forget
                        the most critical aspect of it, which is security. A vulnerable software jeopardises the privacy
                        of the user. Having knowledge about it is very important. So we present to you d4rkc0de, the
                        cyber security club of IIIT Delhi.

                        <br />
                        Cyber security is a relatively unknown field to most because of a lack of awareness and
                        resources. We at d4rkc0de aim to change that.

                        <br />
                        We share various resources and conduct live, hands-on sessions for the same. We provide a
                        platform for people to discuss cyber security. To keep the competitive spirit, we also have
                        various tournaments with amazing prizes.

                        <br />
                        We only ask for your willingness to learn.
                    </Text>
                </Flex>
            </Box>
        </Flex>
    );
}
