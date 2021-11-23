import React from "react";
import { Box, Image, Heading, Text, Flex } from "@chakra-ui/react";

export default function EventsCard(props) {
    return (
        <Box>
            <Flex>
                <Image src={props.image} />
                <Heading>{props.title}</Heading>
                <Text>{props.desc}</Text>
            </Flex>
        </Box>
    );
}
