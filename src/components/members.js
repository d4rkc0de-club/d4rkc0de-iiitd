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
            name: "Arpit Nandi",
            email: "arpit20179@iiitd.ac.in",
        },
        2: {
            name: "Abhishek Pratap Singh",
            email: "abhishek18211@iiitd.ac.in",
        },
    };

    const techies = {
        1: {
            name: "Pragyan Mehrotra",
            email: "pragyan18168@iiitd.ac.in",
        },
        2: {
            name: "Aditya Pratap Singh",
            email: "aditya20016@iiitd.ac.in",
        },
        3: {
            name: "Sanyam Agarwal",
            email: "sanyam18261@iiitd.ac.in",
        },
        4: {
            name: "Priyansh Anand",
            email: "priyansh19078@iiitd.ac.in"
        },
        5: {
            name: "Anindya Prithvi",
            email: "anindya20024@iiitd.ac.in"
        },
        6: {
            name: "Mehul Arora",
            email: "mehul21066@iiitd.ac.in"
        },
        7: {
            name: "Sameer Gupta",
            email: "sameer21093@iiitd.ac.in"
        },
        8: {
            name: "Sarthak Kalpasi",
            email: "sarthak21197@iiitd.ac.in"
        }
    };

    const creatives = {
        1: {
            name: "Pragyan Yadav",
            email: "pragyan20226@iiitd.ac.in",
        },
        2: {
            name: "Charvi Jindal",
            email: "charvi20045@iiitd.ac.in",
        },
        3: {
            name: "Yogesh Kaushik",
            email: "yogesh20163@iiitd.ac.in"
        },
        4: {
            name: "Sumit Kumar",
            email: "sumit20249@iiitd.ac.in"
        },
        5: {
            name: "Shubham Rao",
            email: "shubham20246@iiitd.ac.in"
        },
        6: {
            name: "Kumar Ankit",
            email: "ankit20214@iiitd.ac.in"
        },
        7: {
            name: "Shivam Arora",
            email: "shivam19390@iiitd.ac.in"
        },
        8: {
            name: "Kabir Singh Mehrok",
            email:"kabir20382@iiitd.ac.in"
        },
        9: {
            name: "Akshansh U Pagare",
            email: "akshansh20302@iiitd.ac.in"
        },
        10: {
            name:"Yash Agrawal",
            email: "yash20551@iiitd.ac.in"
        },
        11: {
            name: "Rahul",
            email: "rahul20534@iiitd.ac.in"
        },
        12: {
            name: "Utkarsh Arora",
            email: "utkarsh20143@iiitd.ac.in"
        },
        13: {
            name: "Shikhar Sharma",
            email: "shikhar20121@iiitd.ac.in"
        },
        14: {
            name: "Gunar Sindhwani",
            email: "gunar20199@iiitd.ac.in"
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
                id="members"
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
