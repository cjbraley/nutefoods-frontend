import React from "react";
import styled from "styled-components";

import PlusIcon from "../../assets/icons/plus.svg";
import MinusIcon from "../../assets/icons/minus.svg";

const BundlePickerRow = ({
    isTotal,
    title,
    color,
    canIncrement,
    canDecrement,
    quantity,
    totalQuantity,
    setQuantity,
    setActiveIndex,
    active,
    noBorders,
    disableQuantitySelect = false,
}) => {
    let inputRegex = /^[0-9\b]{0,3}$/;

    const handleInput = e => {
        if (e.target.value.match(inputRegex)) {
            setQuantity(e.target.value);
        } else {
            e.preventDefault();
        }
    };

    const updateQuantity = val => {
        let newQuantity;
        if (val <= 0) newQuantity = 0;
        else if (val > 999) newQuantity = 999;
        else newQuantity = val;
        setQuantity(newQuantity);
    };

    return (
        <Container noBorders={noBorders}>
            <div className="order-item-container order-item-container--left">
                <div className="order-item-title">{title}</div>
                {color && (
                    <div
                        className={`order-item-color ${active ? "active" : ""}`}
                        style={{ backgroundColor: color }}
                        onClick={setActiveIndex}
                        onKeyDown={setActiveIndex}
                        role="button"
                        aria-label="pick item"
                        tabIndex="0"
                    />
                )}
            </div>
            {isTotal ? (
                <div className="order-item-container">
                    <div className="order-item-quanity-select">{totalQuantity}</div>
                </div>
            ) : (
                <div className="order-item-container">
                    <input
                        type="text"
                        className="order-item-quanity-select"
                        onChange={handleInput}
                        value={quantity}
                    />
                    {!disableQuantitySelect && (
                        <div>
                            <PlusIcon
                                className={`icon ${canIncrement ? "" : "disabled"}`}
                                onClick={() => (canIncrement ? updateQuantity(quantity + 1) : null)}
                            />
                            <MinusIcon
                                className={`icon ${canDecrement ? "" : "disabled"}`}
                                onClick={() => (canDecrement ? updateQuantity(quantity - 1) : null)}
                            />
                        </div>
                    )}
                </div>
            )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    border-bottom: ${props => (props.noBorders ? "" : `1px solid ${props.theme.color.primary}`)};
    height: 2.25rem;
    padding: 0 0.75rem;

    .order-item-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
        height: 100%;
        padding: 0 1rem;
    }

    .order-item-container--left {
        border-right: ${props => (props.noBorders ? "" : `1px solid ${props.theme.color.primary}`)};
    }

    .order-item-color {
        cursor: pointer;
        margin: auto 0;
        border-radius: 50%;
        height: 1rem;
        width: 1rem;
        opacity: 0.6;

        &.active {
            opacity: 1;
            border: 1px solid ${props => props.theme.color.three};
            box-shadow: 0 0 0 1px ${props => props.theme.color.primary};
        }
    }

    input {
        font-size: inherit;
        color: inherit;
        width: calc(100% - 4.5rem);
        border: none;
        background: 0 0;
        border-radius: 3px;
        text-align: left;
        vertical-align: middle;
        background: hsla(0, 0%, 100%, 0);
        outline: none;
    }

    .icon {
        cursor: pointer;
        height: 0.875rem;
        stroke: ${props => props.theme.color.primary};
        margin-left: 0.75rem;
    }

    .disabled {
        cursor: default;
        opacity: 0.4;
    }
`;

export default BundlePickerRow;
