import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { currencyFilter } from "../../utils";
import { removeFromCart } from "../../state/cart";

import CartSetIcon from "../../assets/icons/cart-set.svg";

const CartItem = ({ item, isLast = false, cartIndex, $alt = false }) => {
    const dispatch = useDispatch();

    return (
        <Container isLast={isLast} $alt={$alt}>
            <CartSetIcon className="icon" />
            <div className="item">
                <div className="item__header">
                    <h6 className="item__header__name">{item.name}</h6>
                    <h6 className="item__header__price"> {currencyFilter(item.price)}</h6>
                </div>
                <h6 className="item__detail">
                    {item.contents.map(item => `${item.name} (${item.quantity})`).join(", ")}
                </h6>
                <button
                    className="item__footer"
                    onClick={() => dispatch(removeFromCart(0))}
                    onKeyDown={() => dispatch(removeFromCart(0))}
                    tabIndex="0"
                >
                    <h6>REMOVE</h6>
                </button>
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    padding: 0 ${props => props.theme.spacing.s};
    margin-bottom: ${props => (props.isLast ? "" : props.theme.spacing.m)};

    .icon {
        fill: ${props => (props.$alt ? props.theme.color.secondary : props.theme.color.primary)};
        height: 2.125rem;
        width: 2.125rem;
        margin-right: ${props => props.theme.spacing.s};
    }

    .item {
        flex-grow: 1;
        display: flex;
        flex-direction: column;

        &__header {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
        }

        &__detail {
            word-wrap: wrap;
            font-weight: lighter;
            margin-bottom: ${props => props.theme.spacing.s};
        }
        &__footer {
            cursor: pointer;
            font-weight: lighter;
            text-decoration: underline;
            margin-left: auto;
        }
    }

    @media (hover: hover) and (pointer: fine) {
        .item {
            &__footer {
                &:hover {
                    color: ${props => props.theme.color.secondaryHoverText};
                }
            }

            &__footer--alt {
                &:hover {
                    color: ${props => props.theme.color.primaryHoverText};
                }
            }
        }
    }
`;

export default CartItem;
