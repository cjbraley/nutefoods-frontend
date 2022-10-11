import React from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";
import { useSelector } from "react-redux";

import Navbar from "../ui/Navbar";
import MenuSubItem from "./MenuSubItem";
import DropdownText from "../general/DropdownText";

const Menu = () => {
    const icebars = useStaticQuery(graphql`
        {
            allStrapiIcebar {
                edges {
                    node {
                        name
                    }
                }
            }
        }
    `).allStrapiIcebar.edges;

    const { showMenu } = useSelector(state => {
        return state.ui;
    });

    return (
        <MenuContainer showMenu={showMenu}>
            <Navbar $alt={true} />
            <div className="menu-content">
                <div className="menu-section">
                    <h3 className="menu-title">
                        <span>Products</span>
                    </h3>
                    <DropdownText title={"Icebar Smoothie"} noPadding $alt defaultExpanded>
                        {icebars.map((icebar, i) => (
                            <MenuSubItem
                                key={icebar.node.name}
                                to={`/products/icebar-smoothie/${icebar.node.name.toLowerCase()}`}
                                text={icebar.node.name}
                            />
                        ))}
                    </DropdownText>
                </div>
                <div className="menu-section">
                    <h3 className="menu-title">
                        <span>Order</span>
                    </h3>
                    <DropdownText title={"Icebar Smoothie"} noPadding $alt defaultExpanded>
                        <MenuSubItem to="/order/icebar-smoothie/starter-set" text="Starter Set" />
                        <MenuSubItem
                            to="/order/icebar-smoothie/create-your-set"
                            text="Create Your Set"
                        />
                    </DropdownText>
                </div>
                <div className="flex-grow"></div>
                <div className="menu-nav">
                    <Link to="/we" className="menu-nav__item">
                        We
                    </Link>
                    <Link to="/faq" className="menu-nav__item">
                        FAQ
                    </Link>
                    <div className="menu-nav__item">
                        <a href="mailto:hello@nutefoods.com" target="_blank" rel="noreferrer">
                            Email
                        </a>
                    </div>
                    <div className="menu-nav__item">
                        <a
                            href="https://www.instagram.com/nutefoods"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>
                    </div>
                    <div className="menu-nav__item">
                        <a href="https://wa.me/85260362938" target="_blank" rel="noreferrer">
                            Whatsapp
                        </a>
                    </div>
                </div>
            </div>
        </MenuContainer>
    );
};

const MenuContainer = styled.div`
    position: fixed;
    z-index: 999999;
    top: 0;
    left: 0;
    min-height: 100vh;
    height: 100%;
    /* mobile viewport bug fix */
    // min-height: -webkit-fill-available;
    flex-grow: 1;
    width: 100vw;
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.secondary};
    display: flex;
    flex-direction: column;
    transform: ${props => (props.showMenu ? "translateX(0%)" : "translateX(-100%)")};
    transition: transform 0.35s ease;

    .menu-content {
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .menu-section {
        margin-bottom: 2rem;

        .menu-title {
            font-family: Nib, sans-serif;
            margin-bottom: 1rem;
            span {
                border-bottom: 1px solid ${props => props.theme.color.secondary};
            }
        }
    }

    .menu-nav {
        flex: 1;
        margin-top: 0.75rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        flex: 0 0 auto;
        margin-bottom: 6rem;

        a {
            text-decoration: none;
            &:hover {
                opacity: 0.75;
            }
        }

        &__item {
            cursor: pointer;
            font-size: ${props => props.theme.font.size.xl};
            margin-bottom: 0.25rem;
        }
    }

    .flex-grow {
        flex: 1;
    }

    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
        transition: all 0.2s;
        max-width: 25rem;
    }
`;

export default Menu;
