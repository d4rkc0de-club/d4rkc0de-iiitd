import React from "react";
import {Grid, GridItem, Text} from "@chakra-ui/react";

export default class Contact extends React.Component {
    render() {
        return (
        <div>
            <Text fontSize='3xl' color="primary.800" align="center" pt="50px" pb="20px">
                {">> "} Contact Us {" <<"}
            </Text>
            <Grid templateColumns='repeat(5, 1fr)' gap={4} pb="30px">
              <GridItem colSpan={2} h='10'>
                  {">> "} position 1: person1@gmail.com
              </GridItem>
              <GridItem colStart={4} colEnd={6} h='10'>
                  {">> "} position 2: person2@gmail.com
              </GridItem>

              <GridItem colSpan={2} h='10' >
                  {">> "} position 3: person3@gmail.com
              </GridItem>

              <GridItem colStart={4} colEnd={6} h='10'>
                  {">> "} position 4: person4@gmail.com
              </GridItem>
            </Grid>
        </div>
        );
    }
}