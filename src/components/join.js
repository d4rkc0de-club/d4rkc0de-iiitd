import React from "react";
import {Flex, Box, Text, Center, Link,} from "@chakra-ui/react";
import {FaDiscord, FaTelegram} from "react-icons/all";

export default function Join() {
    return (
        <Flex direction="column" justify="center" align="center" mb="7rem" id="join">
            <Text fontSize={{md:'5xl', base: '4xl'}} color="primary.800" pb="35px" fontWeight={"bolder"}>
                {">> "} Join Us {" <<"}
            </Text>

            <Box>
                <Text>
                There are various ways to join our club: <br></br>
                <ul>
                   <li>Participate in our CTFs and we provide the top 3 performers with the chance to join us.<br></br></li>
                   <li>Share your CTFTime profile to <u><a href="mailto:d4rkcode@sc.iiitd.ac.in">d4rkcode@sc.iiitd.ac.in</a></u> and <u><a href="mailto:arpit20179@iiitd.ac.in">arpit20179@iiitd.ac.in</a></u> if you have performed well in CTFs organised by other organizations<br></br></li>
                   <li>Sharing your profiles of lab environments like HackTheBox, TryHackMe and others also makes you eligible for membership<br></br></li>
                    <br></br>
                    </ul>

                    <Center>
                        <Link href="https://t.me/joinchat/QuKJ5QEQAK-6Z__J" mx="1rem"><FaTelegram
                            size={'3rem'} color={"#00F40A"}/></Link> &ensp;
                        <Link href="https://discord.gg/uP3bFcm6yp" mx="1rem"><FaDiscord size={'3rem'} color={"#00F40A"}/></Link>
                    </Center>
                </Text>
            </Box>
        </Flex>
    );
}
