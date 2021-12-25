import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./events.css";


export default function Events() {
    const events = [
        {
            image: 'https://via.placeholder.com/200x200',
            title: 'Hacking Sessions',
            desc: "Educative discussion sessions where we discuss techniques on how to conduct various attacks"
        },
        {
            image: 'https://via.placeholder.com/200x200',
            title: 'Intra IIITD CTF',
            desc: "CTF event aimed for all students studying in IIITD "
        },
        {
            image: 'https://via.placeholder.com/200x200',
            title: 'h4ck0n Global CTF',
            desc: "d4rkcode's flagship event"
        },


    ];
    const slidesNum = window.innerWidth < 600 ? window.innerWidth/300: 4;

    const slidesScroll = window.innerWidth < 600 ? 1 : 2;

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: Math.min(slidesNum, events.length),
        slidesToScroll: slidesScroll,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: 'ease-in-out',
        pauseOnHover: true,
        arrows: true,
        centerMode: true,
        centerPadding: '30px',
    };

    // TODO: Check props validation

    return (
        <Flex direction="column" justify="center" align="center" mb="7rem" w="100%" id="events">
        <Box w="90%" align="center">
            <Text fontSize={{md:'5xl', base: '4xl'}} color="primary.800" pb="35px" fontWeight={"bolder"}>
                {">> "} Events {" <<"}
            </Text>
            <Slider {...settings} >
            {events.map(event => (
                <Box key={`Event-${event}`} m="0px 50px">

                    <Text><h3>{event.title}</h3></Text>
                    <Text>{event.desc}</Text>
                </Box>
            ))}
            </Slider>
        </Box>
        </Flex>
    );
}
