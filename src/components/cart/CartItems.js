import React from "react";
import styled from "styled-components";

import { currencyFilter } from "../../utils";

import CartItem from "./CartItem";

const CartItems = ({ cart, $alt = false, showDetails = false }) => {
    return (
        <Container $alt={$alt}>
            <div className="cart-items">
                {cart.items.map((item, i) => (
                    <CartItem
                        key={i}
                        item={item}
                        cartIndex={i}
                        isLast={i === cart.items.length - 1}
                        $alt={$alt}
                    />
                ))}
            </div>
            <div className="divider" />
            {cart.discount > 0 && (
                <div className="cart-section">
                    <div className="cart-section__row">
                        <h6>Discounts:</h6>
                        <h6>- {currencyFilter(cart.discount)}</h6>
                    </div>
                    <div className="cart-subitem">
                        {`10% discount applied for orders at or above ${currencyFilter(600)}`}
                    </div>
                </div>
            )}
            <div className="cart-section">
                <div className="cart-section__row">
                    <h6>Your Subtotal</h6>
                    <h6>{currencyFilter(cart.price - cart.discount)}</h6>
                </div>
            </div>
            {showDetails && (
                <>
                    <div className="cart-section">
                        <div className="cart-section__row">
                            <h6>Shipping</h6>
                            <h6>{cart.shipping === 0 ? "Free" : currencyFilter(cart.shipping)}</h6>
                        </div>
                    </div>
                    <div className="divider" />
                    <div className="cart-section">
                        <div className="cart-section__row">
                            <h6>Total</h6>
                            <h6>{currencyFilter(cart.payable)}</h6>
                        </div>
                    </div>
                </>
            )}
        </Container>
    );
};

const Container = styled.div`
    .divider {
        border-bottom: 1px solid
            ${props => (props.$alt ? props.theme.color.secondary : props.theme.color.primary)};
        margin-top: ${props => props.theme.spacing.l};
        margin-bottom: ${props => props.theme.spacing.l};
    }

    .cart-section {
        padding: 0 ${props => props.theme.spacing.s};
        margin-bottom: 0.75rem;

        &__row {
            display: flex;
            justify-content: space-between;
        }
    }

    .cart-subitem {
        font-size: 0.675rem;
    }

    @media (min-width: $desktopBreakpoint) {
        .cart-total {
            display: flex;
            font-size: $fontDesktopXS;
        }

        .cart-subitem {
            font-size: 0.7rem;
        }
    }
`;

export default CartItems;
