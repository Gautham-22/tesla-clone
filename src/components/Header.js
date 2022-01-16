import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { cars, items } from '../data';

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);

    const toggleSideBar = () => {
        setBurgerStatus(!burgerStatus);
    }

    return (
        <Container>
            <img src="/images/logo.svg" alt="Logo" />
            <Menu>
                {cars.map((car, index) => <p key={index}>
                    <a href={"#" + car}>{car}</a>
                </p>)}
            </Menu>
            <RightMenu>
                <p><a href="#Accessories">Shop</a></p>
                <p>Tesla Account</p>
                <CustomMenu onClick={toggleSideBar} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CloseIcon onClick={toggleSideBar} />
                </CloseWrapper>
                {items.map((item,i) => <li key={i}>{item}</li>)}
            </BurgerNav>
        </Container>
    )
};

export default Header;

const Container = styled.div`
    min-height: 60px;
    padding: 1.5em;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;

`;

const Menu = styled.div`
    margin: 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        padding: 0 1.7em;
        font-weight: 600;
        text-transform: uppercase;
    }

    @media screen and (max-width: 1040px) {
        display: none;
    }

`;

const RightMenu = styled.div`
    margin: 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        padding: 0 2em;
        font-weight: 600;
        text-transform: uppercase;
    }

    @media screen and (max-width: 600px) {
        font-size: 14px;
    }

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }

`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    width: 320px;
    padding-left: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    list-style: none;
    transition: 0.35s ease-in;
    transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};

    li {
        margin-right: 20%;
        padding: 12px 10px;
        font-weight: 600;
        opacity: 0.75;
        border-radius: 10px;
        cursor: pointer;
    }

    li:hover {
        background: rgba(0,0,0,0.1);
    }
`;

const CloseWrapper = styled.div`
    position: fixed;
    top: 4%;
    right: 7%;
    cursor: pointer;
`;