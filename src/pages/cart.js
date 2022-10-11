import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Layout from "../components/ui/Layout";
import Seo from "../components/SEO/Seo";

import Button from "../components/general/Button";
import CartEmpty from "../components/cart/CartEmpty";
import CartItems from "../components/cart/CartItems";

const Cart = props => {
    const cart = useSelector(state => state.cart.cart);
    const cartEmpty = cart.items.length === 0;

    return (
        <Layout $alt={true} showFooter={false} navReturn={true}>
            <Seo title="Cart" description="Look at the items in your cart" />
            <Wrapper className="page page--alt">
                <div className="content content--alt">
                    <h3 className="cart-header">Your Cart</h3>
                    <div className="cart-content">
                        {cartEmpty ? <CartEmpty /> : <CartItems cart={cart} $alt={true} />}
                    </div>
                </div>
                {!cartEmpty && (
                    <Link to="/checkout">
                        <Button classes="btn" color="four">
                            Checkout
                        </Button>
                    </Link>
                )}
            </Wrapper>
        </Layout>
    );
};

export default Cart;

const Wrapper = styled.div`
    padding-top: ${props => props.theme.spacing.xl};
    color: ${props => props.theme.color.secondary};

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

    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
        .btn {
            margin-top: ${props => props.theme.spacing.l};
            z-index: 1;
            position: initial;
            padding: 1rem 1rem;
        }
    }
`;
