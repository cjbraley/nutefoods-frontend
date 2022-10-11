import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setShowCart } from "../../state/ui";

const CartEmpty = ({ $alt }) => {
    const dispatch = useDispatch();
    return (
        <Wrapper $alt={$alt}>
            <p className="header">Your cart is empty</p>
            <div className="explore">
                <Link to="/" onClick={() => dispatch(setShowCart(false))}>
                    START EXPLORING
                </Link>
            </div>
        </Wrapper>
    );
};

export default CartEmpty;

const Wrapper = styled.div`
    padding: 0 ${props => props.theme.spacing.m} ${props => props.theme.spacing.xl}
        ${props => props.theme.spacing.m};
    border-bottom: 1px solid
        ${props => (props.$alt ? props.theme.color.primary : props.theme.color.secondary)};

    .header {
        margin-bottom: ${props => props.theme.spacing.s};
    }
`;
