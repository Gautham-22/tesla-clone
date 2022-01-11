import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import {data} from "../data";

const Home = () => {
    return (
        <Container>
                {data.map((element) => <Section 
                    title = {element.title}
                    desc = {element.description}
                    image = {element.image}
                    leftBtnText = {element.leftBtnText}
                    rightBtnText = {element.rightBtnText}
                />)}
        </Container>
    )
};

export default Home;

const Container = styled.div`
    height: 100vh;
    overflow: scroll;
    overflow-x: hidden;
    position: relative;
    scroll-snap-type: y mandatory;
    scroll-padding-top: 0px;
`;