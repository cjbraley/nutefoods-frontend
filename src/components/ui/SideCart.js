import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useSelector, useDispatch } from "react-redux";

import { setShowCart } from "../../state/ui";
import CrossIcon from "../../assets/icons/cross.svg";

import Button from "../../components/general/Button";
import CartEmpty from "../../components/cart/CartEmpty";
import CartItems from "../../components/cart/CartItems";

const SideCart = () => {
    const dispatch = useDispatch();

    const { showCart } = useSelector(state => state.ui);

    const cart = useSelector(state => state.cart.cart);
    const cartEmpty = cart.items.length === 0;

    return (
        <Wrapper className={`${showCart ? "" : "hide"}`}>
            <div className="content content--alt">
                <div
                    className="cart-close"
                    onClick={() => dispatch(setShowCart(false))}
                    onKeyDown={() => dispatch(setShowCart(false))}
                    role="button"
                    tabIndex="0"
                >
                    <CrossIcon className="icon" />
                </div>
                <h3 className="cart-header">Your Cart</h3>
                <div className="cart-content">
                    {cartEmpty ? <CartEmpty /> : <CartItems cart={cart} $alt={true} />}
                </div>
            </div>
            {!cartEmpty && (
                <Link
                    to="/checkout"
                    onClick={() => dispatch(setShowCart(false))}
                    onKeyDown={() => dispatch(setShowCart(false))}
                >
                    <Button classes="btn" color="four">
                        Checkout
                    </Button>
                </Link>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    z-index: 999999;
    top: 0;
    right: 0;
    min-height: 100vh;
    overflow-y: auto;
    height: 100%;
    width: 100vw;
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.secondary};
    display: block;
    transform: translateX(0%);
    transition: all 0.2s;
    max-width: 25rem;

    &.hide {
        transform: translateX(100%);
    }

    .cart-content {
        border-top: 1px solid ${props => props.theme.color.secondary};
        padding-top: ${props => props.theme.spacing.l};
    }

    .cart-total {
        display: flex;
        justify-content: space-between;
        padding: 0 0.75rem;
        font-size: 0.875rem;
        font-weight: lighter;
    }

    .btn {
        z-index: 999;
        width: 100%;
        position: fixed;
        bottom: 0;
        padding: 1.25rem 1rem;
        border-radius: 0;
    }

    .cart-close {
        display: flex;
        align-items: center;
        height: ${props => props.theme.position.navHeight};
        /* border-bottom: 1px solid ${props => props.theme.color.secondary}; */
        margin-bottom: ${props => props.theme.spacing.m};

        .icon {
            cursor: pointer;
            height: 1rem;
            fill: ${props => props.theme.color.secondary};

            &:hover {
                fill: ${props => props.theme.color.secondaryHover};
            }
        }
    }
`;

export default SideCart;
