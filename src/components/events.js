import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import styled from 'styled-components';
import times from 'lodash/times';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./events.css";


export default function Events() {
    const events = [
        {
            image: 'https://via.placeholder.com/200x200',
            title: 'Hackathon1',
            desc: 'description'
        },
        {
            image: 'https://via.placeholder.com/200x200',
            title: 'Hackathon2',
            desc: 'description'
        },
        {
            image: 'https://via.placeholder.com/200x200',
            title: 'Hackathon1',
            desc: 'description'
        },
        {
            image: 'https://via.placeholder.com/200x200',
            title: 'Hackathon2',
            desc: 'description'
        }
    ];
    const slidesNum = window.innerWidth < 600 ? 1: 3;

    const slidesScroll = window.innerWidth < 600 ? 1 : 2;

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: slidesNum,
        slidesToScroll: slidesScroll,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: 'ease-in-out',
        pauseOnHover: true,
        arrows: true,
        centerMode: true,
        centerPadding: '30px',
    };

    const ElemBox = styled.div`
    padding: 10px;
    height: 300px;`

    const ImageBox = styled.div`
    border-radius: 16px;
    `
    // TODO: Check props validation

    return (
        <Box>
            <Text width="100%" textAlign="center">Events</Text>
            <Slider {...settings}>
            {times(events.length, String).map((id, index) => (
                <div key={index}>
                    <ElemBox key={`Event-${id}`}>
                    <ImageBox>
                        <img src={events[id].image}  alt={"event"}/>
                    </ImageBox>
                    <Text>{events[id].title}</Text>
                    <Text>{events[id].desc}</Text>
                </ElemBox>
                </div>
            ))}
            </Slider>

        </Box>
    );
}
