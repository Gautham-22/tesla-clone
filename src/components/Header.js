import React from 'react';
import styled from 'styled-components';
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
    return (
        <Container>
            <img src="/images/logo.svg" alt="Logo" />
            <Menu>
                <p><a href="#Model S">Model S</a></p>
                <p><a href="#Model X">Model X</a></p>
                <p><a href="#Model Y">Model Y</a></p>
                <p><a href="#Model 3">Model 3</a></p>
            </Menu>
            <RightMenu>
                <p><a href="#Accessories">Shop</a></p>
                <p>Tesla Account</p>
                <CustomMenu id='hamburger' />
            </RightMenu>
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

    @media screen and (max-width: 600px) {
        font-size: 14px;
    }

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }

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

`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;