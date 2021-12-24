import React from "react";
import {Grid, GridItem, Text} from "@chakra-ui/react";

export default class Contact extends React.Component {
    render() {
        return (
        <div>
            <Text fontSize={{md:'5xl', base: '4xl'}} color="primary.800" pb="35px" fontWeight={"bolder"} align={"center"}>
                {">> "} Contact Us {" <<"}
            </Text>
            <Grid templateColumns='repeat(5, 1fr)' gap={4} pb="30px">
              <GridItem colSpan={2} h='10' m={{md: "0", base: "1.5em 0px"}}>
                  <Text>{">> "} Club ID: <a href="mailto:d4rkc0de@sc.iiitd.ac.in">d4rkc0de@sc.iiitd.ac.in</a></Text>
              </GridItem>
              <GridItem colStart={4} colEnd={6} h='10' m={{md: "0", base: "1.5em 0px"}}>
                  <Text>{">> "} Arpit Nandi (Coordinator): <a href="mailto:arpit20179@iiitd.ac.in">arpit20179@iiitd.ac.in</a></Text>
              </GridItem>

              {/*<GridItem colSpan={2} h='10' m={{md: "0", base: "1.5em 0px"}}>*/}
              {/*    <Text>{">> "} position 3: person3@gmail.com</Text>*/}
              {/*</GridItem>*/}

              {/*<GridItem colStart={4} colEnd={6} h='10' m={{md: "0", base: "1.5em 0px"}}>*/}
              {/*    <Text>{">> "} position 4: person4@gmail.com</Text>*/}
              {/*</GridItem>*/}
            </Grid>
        </div>
        );
    }
}
