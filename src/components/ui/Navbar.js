import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setShowMenu, setShowCart } from "../../state/ui";

import Logo from "../../components/icons/Logo";
import ArrowIcon from "../../assets/icons/arrow.svg";
import CartIcon from "../../assets/icons/cart.svg";

const Navbar = ({ $alt, navReturn = false, hideCart = false }) => {
    const dispatch = useDispatch();
    const {
        ui: { showMenu },
        cart: { cart },
    } = useSelector(state => {
        return state;
    });

    return (
        <Nav id="nav" $alt={$alt}>
            <Link className="logo-container" to="/">
                <Logo $alt={$alt} />
            </Link>
            <div className="nav-container">
                {navReturn ? (
                    <Link to="/order">
                        <div className="menu-return">
                            <ArrowIcon className="arrow-icon" />
                            <span>Shop</span>
                        </div>
                    </Link>
                ) : (
                    <div
                        className="menu-button"
                        onClick={() => dispatch(setShowMenu(!showMenu))}
                        onKeyDown={() => dispatch(setShowMenu(!showMenu))}
                        role="button"
                        tabIndex="0"
                        aria-label="menu-toggle"
                    />
                )}
                {!hideCart && (
                    <Link to="/cart" className="hide--desktop cart">
                        <CartIcon className="cart__icon" />
                        {cart.items.length > 0 && (
                            <div className={`cart-number ${$alt ? "cart-number--alt" : ""}`}>
                                <span>{cart.items.length}</span>
                            </div>
                        )}
                    </Link>
                )}
                {!hideCart && (
                    <div
                        className="hide--mobile cart"
                        onClick={() => dispatch(setShowCart(true))}
                        onKeyDown={() => dispatch(setShowCart(true))}
                        role="button"
                        tabIndex="0"
                    >
                        <CartIcon className="cart__icon" />
                        {cart.items.length > 0 && (
                            <div className={`cart-number ${$alt ? "cart-number--alt" : ""}`}>
                                <span>{cart.items.length}</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
    height: ${props => props.theme.position.navHeight};
    width: 100%;
    background-color: ${props =>
        props.$alt ? props.theme.color.primary : props.theme.color.secondary};
    color: ${props => (props.$alt ? props.theme.color.secondary : props.theme.color.primary)};
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
    transition: all 0.25s ease-in-out;

    .nav-container {
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-content: center;
        margin: 0 1rem;
        border-bottom: 1px solid
            ${props => (props.$alt ? props.theme.color.secondary : props.theme.color.primary)};
    }

    .logo-container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        .logo {
            height: calc(1.5rem + 2px);
        }
    }

    .menu-button {
        cursor: pointer;
        align-content: center;
        height: 1.5rem;
        width: 1.5rem;
        padding: 0;
        margin-top: auto;
        margin-bottom: auto;
        border: 1px solid
            ${props => (props.$alt ? props.theme.color.secondary : props.theme.color.primary)};
        border-radius: 50%;
        background: none;
        transition: all 0.25s ease;

        &:hover {
            background-color: ${props =>
                props.$alt ? props.theme.color.secondary : props.theme.color.primary};
        }
    }

    a {
        text-decoration: none;
    }

    .menu-return {
        height: 100%;
        display: flex;
        align-items: center;

        .arrow-icon {
            height: 1.125rem;
            margin-right: ${props => props.theme.spacing.xs};
            transform: rotate(180deg);
            fill: ${props =>
                props.$alt ? props.theme.color.secondary : props.theme.color.primary};
        }
    }

    .cart {
        cursor: pointer;
        margin-top: auto;
        margin-bottom: auto;
        display: flex;
        position: relative;

        &__icon {
            height: 1.55rem;
            stroke: ${props =>
                props.$alt ? props.theme.color.secondary : props.theme.color.primary};
            stroke-width: 2px;
            fill: none;
        }
    }

    .cart-number {
        position: absolute;
        height: 1rem;
        line-height: 1rem;
        width: 1rem;
        font-size: 0.575rem;
        font-weight: normal;
        border-radius: 50%;
        top: -0.25rem;
        right: -0.325rem;
        color: ${props => props.theme.color.primary};
        border: 1px solid ${props => props.theme.color.primary};
        background-color: ${props => props.theme.color.secondary};
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cart-number--alt {
        color: ${props => props.theme.color.secondary};
        border-color: ${props => props.theme.color.secondary};
        background-color: ${props => props.theme.color.primary};
    }

    .hide--mobile {
        display: none;
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        .hide--mobile {
            display: flex;
        }

        .hide--desktop {
            display: none;
        }
    }
`;
