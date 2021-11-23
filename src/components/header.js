import React from "react";
import { Link, Flex, Box, Text } from "@chakra-ui/react";

export default function Header() {
    return( 
        <Flex
            direction="row"
            justify="space-between"
            align="center"
        >
            <Box>
                <Text>
                    d4rkc0de
                </Text>
            </Box>
            <Box>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/events">Events</Link>
                <Link href="/members">Members</Link>
                <Link href="/join">Join Us</Link>
                <Link href="/contact">Contact</Link>
            </Box>
        </Flex>
    );
}