import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Layout from "../../components/ui/Layout";
import Seo from "../../components/SEO/Seo";
import ShippingForm from "../../components/checkout/ShippingForm";

import CartEmpty from "../../components/cart/CartEmpty";
import CartItems from "../../components/cart/CartItems";

const Checkout = props => {
    const cart = useSelector(state => state.cart.cart);
    const cartEmpty = cart.items.length === 0;

    return (
        <Layout showFooter={false} navReturn hideCart>
            <Seo title="Checkout" />
            <Wrapper className="page">
                <div className="content">
                    <h3 className="cart-header">Your Order Summary</h3>
                    <div className="cart-content">
                        {cartEmpty ? <CartEmpty $alt /> : <CartItems cart={cart} showDetails />}
                    </div>
                </div>
                {cart.items.length > 0 && <ShippingForm />}
            </Wrapper>
        </Layout>
    );
};

export default Checkout;

const Wrapper = styled.div`
    padding-top: ${props => props.theme.spacing.xl};
    margin-bottom: ${props => props.theme.spacing.xl};

    .cart-content {
        border-top: 1px solid
            ${props => (props.$alt ? props.theme.color.secondary : props.theme.color.primary)};
        padding: ${props => props.theme.spacing.l} 0;
    }

    .cart-total {
        display: flex;
        justify-content: space-between;
        padding: 0 0.75rem;
        font-size: 0.875rem;
        font-weight: lighter;
    }
`;
