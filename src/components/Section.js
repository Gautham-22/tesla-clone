import React from 'react';
import styled from 'styled-components';

const Section = ({ title, desc, image, leftBtnText, rightBtnText }) => {
    return (
        <Wrap bg={image}>
            <ItemText>
                <ItemName>{title}</ItemName>
                <p style={ {fontSize: "18px"} }>{desc}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    { 
                        leftBtnText &&  
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                    }
                    {
                        rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
};

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => `url(${props.bg})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    scroll-snap-align: start; 
    scroll-snap-stop: normal;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const ItemName = styled.h1 `
    margin-bottom: 10px;
    font-size: 2.5rem;
`;

const Buttons = styled.div`
    overflow: hidden;
`; 

const ButtonGroup = styled.div`
    margin-bottom: 4vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    letter-spacing: 1px;
`;

const LeftButton = styled.div`
    margin: 10px;
    width: 230px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: rgba(23, 26, 32, 0.8);
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    opacity: 0.98;
`;

const RightButton = styled(LeftButton)`
    background: white;
    color: rgba(23, 26, 32, 0.7);
`;

const DownArrow = styled.img`
    display: block;
    height: 40px;
    margin: 5px auto;
    animation: animateDown infinite 3s;
`;