import React from "react";
import {Flex, Box, Text, } from "@chakra-ui/react";

export default function Join() {
    return (
        <Flex direction="column" justify="center" align="center" mb="7rem">
            <Text fontSize={{md:'5xl', base: '4xl'}} color="primary.800" pb="35px" fontWeight={"bolder"}>
                {">> "} Join Us {" <<"}
            </Text>

            <Box>
                <Text>
                There are various ways to join our club: <br></br>
                <ul>
                   <li>Participate in our CTFs and we provide the top 3 performers with the chance to join us.<br></br></li>
                   <li>Share your CTFTime profile to <u><a href="mailto:d4rkcode@sc.iiitd.ac.in">d4rkcode@sc.iiitd.ac.in</a></u> and <u><a href="arpit20179@iiitd.ac.in">arpit20179@iiitd.ac.in</a></u> if you have performed well in CTFs organised by other organizations<br></br></li>
                   <li>Sharing your profiles of lab environments like HackTheBox, TryHackMe and others also makes you eligible for membership<br></br></li>
                    <br></br>
                    </ul>
                    <a href="https://t.me/joinchat/QuKJ5QEQAK-6Z__J" style={{color:"blue",fontSize:"17px"}}>Join us on Telegram</a> &ensp;
                    <a href="https://discord.gg/uP3bFcm6yp" style={{color:"blue",fontSize:"17px"}}>Join us on Discord </a>
                </Text>
            </Box>
        </Flex>
    );
}
