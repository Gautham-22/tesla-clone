import React from 'react';
import styled from 'styled-components';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

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
                <CustomMenu />
            </RightMenu>
            <BurgerNav>
                <CloseWrapper>
                    <CloseIcon />
                </CloseWrapper>
                <li>Existing Inventory</li>
                <li>Used Inventory</li>
                <li>Trade-In</li>
                <li>Test Drive</li>
                <li>Cybertruck</li>
                <li>Roadster</li>
                <li>Semi</li>
                <li>Charging</li>
                <li>Powerwall</li>
                <li>Commercial Energy</li>
                <li>Utilities</li>
                <li>Find Us</li>
                <li>Support</li>
                <li>Investor Relations</li>
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
    top: 5%;
    right: 2%;
`;