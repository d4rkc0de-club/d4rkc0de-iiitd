import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import EventsCard from './EventsCard/eventscard';

export default function Events() {
    const events = [
        {
            image: 'https://via.placeholder.com/200x200',
            title: 'Hackathon',
            desc: 'description'
        }
    ];

    // TODO: Check props validation

    return (
        <Flex direction="column" justify="center" align="center">
            <Text>Events</Text>
            <Box>
                <EventsCard props={events} />
            </Box>
        </Flex>
    );
}
