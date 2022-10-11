import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useDispatch } from "react-redux";

import { addToCart } from "../../state/cart";

import Button from "../general/Button";
import BundlePickerRow from "./BundlePickerRow";

const BUNDLE_MIN_QUANTITY = 10;
const ITEM_MIN_QUANTITY = 0;
const ITEM_MAX_QUANTITY = 999;

const calcTotalPrice = contents => {
    return contents.reduce((a, b) => a + parseInt(b.quantity) * parseInt(b.price), 0);
};

const calcTotalQuantity = contents => {
    return contents.reduce((a, b) => a + parseInt(b.quantity), 0);
};

const BundlePicker = ({ icebars, defaultBundle = false }) => {
    const dispatch = useDispatch();

    console.log("default", defaultBundle);

    const createYourSetDefaultContents = icebars.map((icebar, i) => ({
        name: icebar.name,
        quantity: icebar.quantity || 3,
        price: icebar.create_your_set_price,
    }));

    const [activeIndex, setActiveIndex] = useState(0);
    const [bundle, setBundle] = useState(defaultBundle);

    useEffect(() => {
        console.log("USE EFFECT");
        setActiveIndex(0);
        setBundle(defaultBundle);
    }, [defaultBundle]);

    const updateBundle = (i, quantity) => {
        const newBundle = { ...bundle };
        newBundle.contents[i].quantity = parseInt(quantity) || 0;
        newBundle.price = calcTotalPrice(newBundle.contents);
        newBundle.quantity = calcTotalQuantity(newBundle.contents);
        setBundle(newBundle);
    };

    const canOrder = bundle.quantity >= BUNDLE_MIN_QUANTITY;

    return (
        <Container>
            <Carousel
                renderArrowNext={() => false}
                renderArrowPrev={() => false}
                showStatus={false}
                showThumbs={false}
                selectedItem={activeIndex}
                infiniteLoop={true}
                interval={2000}
                onClickItem={() => setActiveIndex((activeIndex + 1) % icebars.length)}
            >
                {icebars.map((icebar, i) => (
                    <GatsbyImage
                        className="cys-img"
                        key={`${icebar.name}`}
                        image={getImage(icebar.img_create_your_set.localFile)}
                        alt={`${icebar.img_create_your_set.alternativeText}`}
                        loading="eager"
                    />
                ))}
            </Carousel>
            <Button color="four">
                <Link to={`/products/icebar-smoothie/${icebars[activeIndex].name.toLowerCase()}`}>
                    Explore {icebars[activeIndex].name}
                </Link>
            </Button>
            {bundle.contents.map((bundleItem, i) => (
                <BundlePickerRow
                    key={i}
                    bundle={bundle}
                    setQuantity={q => updateBundle(i, q)}
                    active={activeIndex === i}
                    setActiveIndex={() => setActiveIndex(i)}
                    quantity={bundleItem.quantity}
                    canIncrement={bundleItem.quantity < ITEM_MAX_QUANTITY}
                    canDecrement={bundleItem.quantity > ITEM_MIN_QUANTITY}
                    color={icebars[i].color_hex}
                    title={icebars[i].name}
                />
            ))}
            <BundlePickerRow title="Total" totalQuantity={bundle.quantity} isTotal noBorders />
            <Footer>
                <Button fixed classes={`cys-footer ${!canOrder ? "disabled" : ""}`}>
                    <Link
                        to="/cart"
                        className="link-container"
                        disabled={canOrder}
                        onClick={() => (canOrder ? dispatch(addToCart(bundle)) : "")}
                    >
                        <h4>Add to cart</h4>
                        <h4>HK${bundle.price}</h4>
                    </Link>
                </Button>
            </Footer>
        </Container>
    );
};

const Container = styled.div`
    margin-bottom: 4rem;

    .cys-img {
        height: 26rem;
    }

    .carousel-root {
    }

    .control-dots {
        margin-bottom: ${props => props.theme.spacing.l} !important;

        .dot {
            margin: 0 0.25rem !important;
            opacity: 1 !important;
            background-color: ${props => props.theme.color.three} !important;
            box-shadow: none !important;
        }

        .selected {
            background-color: ${props => props.theme.color.primary} !important;
        }
    }
    a {
        text-decoration: none;
    }
`;

const Footer = styled.div`
    a {
        text-decoration: none;
    }

    h4 {
    }

    .link-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1.5rem;
    }
`;

export default BundlePicker;
