import React from "react";
import {
    Flex,
    Box,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Table,
    Tbody,
    Tr,
    Td,
} from "@chakra-ui/react";

export default function Members() {
    const coordinators = {
        1: {
            name: "Name 1",
            email: "abc@xyz.com",
        },
        2: {
            name: "Name 2",
            email: "abc@xyz.com",
        },
    };

    const techies = {
        1: {
            name: "Name 1",
            email: "abc@xyz.com",
        },
        2: {
            name: "Name 2",
            email: "abc@xyz.com",
        },
    };

    const creatives = {
        1: {
            name: "Name 1",
            email: "abc@xyz.com",
        },
        2: {
            name: "Name 2",
            email: "abc@xyz.com",
        },
    };

    const coordinatorsItems = Object.entries(coordinators).map(
        ([key, value]) => (
            <Tr key={key}>
                <Td>{value.name}</Td>
                <Td>{value.email}</Td>
            </Tr>
        )
    );

    const techiesItems = Object.entries(techies).map(([key, value]) => (
        <Tr key={key}>
            <Td>{value.name}</Td>
            <Td>{value.email}</Td>
        </Tr>
    ));

    const creativesItems = Object.entries(creatives).map(([key, value]) => (
        <Tr key={key}>
            <Td>{value.name}</Td>
            <Td>{value.email}</Td>
        </Tr>
    ));

    return (
        <>
            <Flex
                direction="column"
                justify="center"
                align="center"
                mb="7rem"
                w="100%"
            >
                <Text
                    fontSize={{md:'5xl', base: '4xl'}}
                    color="primary.800"
                    pb="35px"
                    fontWeight={"bolder"}
                >
                    {">> "} Our Team {" <<"}
                </Text>

                <Box w="100%">
                    <Accordion allowToggle>
                        <AccordionItem m="25px 0px">
                            <AccordionButton
                                h="70px"
                                border="4px"
                                borderColor="primary.800"
                                borderRadius="10px"
                                fontSize="2xl"
                                _expanded={{
                                    bg: "primary.800",
                                    color: "black",
                                }}
                            >
                                <Box flex="1" textAlign="left">
                                    Coordinators
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <Table>
                                    <Tbody>{coordinatorsItems}</Tbody>
                                </Table>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem m="25px 0px">
                            <AccordionButton
                                h="70px"
                                border="4px"
                                borderColor="primary.800"
                                borderRadius="10px"
                                fontSize="2xl"
                                _expanded={{
                                    bg: "primary.800",
                                    color: "black",
                                }}
                            >
                                <Box flex="1" textAlign="left">
                                    Techies
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <Table>
                                    <Tbody>{techiesItems}</Tbody>
                                </Table>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem m="25px 0px">
                            <AccordionButton
                                h="70px"
                                border="4px"
                                borderColor="primary.800"
                                borderRadius="10px"
                                fontSize="2xl"
                                _expanded={{
                                    bg: "primary.800",
                                    color: "black",
                                }}
                            >
                                <Box flex="1" textAlign="left">
                                    Creatives
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <Table>
                                    <Tbody>{creativesItems}</Tbody>
                                </Table>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Flex>
        </>
    );
}
