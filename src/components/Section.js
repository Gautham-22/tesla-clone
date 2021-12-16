import React from 'react';
import styled from 'styled-components';

const Section = () => {
    return (
        <Wrap>
            <ItemText>
                <ItemName>Model S</ItemName>
                <p style={ {fontSize: "18px"} }>Order online for touchless delivery</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
            </ButtonGroup>
        </Wrap>
    )
};

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("/images/model-3.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const ItemName = styled.h1 `
    margin-bottom: 10px;
    font-size: 2.5rem;
`;

const ButtonGroup = styled.div`
    margin-bottom: 7vh;
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
    color: rgba(23, 26, 32, 0.8);
`;