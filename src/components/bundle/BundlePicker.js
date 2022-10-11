import React from "react";
import { Link, navigate } from "gatsby";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { connect } from "react-redux";

import { setShowCart } from "../../state/ui";
import { addToCart } from "../../state/cart";
import { currencyFilter } from "../../utils";

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

class BundlePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            bundle: props.defaultBundle,
        };
    }

    updateBundle(i, quantity) {
        const newBundle = { ...this.state.bundle };
        newBundle.contents[i].quantity = parseInt(quantity) || 0;
        newBundle.price = calcTotalPrice(newBundle.contents);
        newBundle.quantity = calcTotalQuantity(newBundle.contents);
        this.setbundle(newBundle);
    }

    setActiveIndex(i) {
        this.setState(state => (state.activeIndex = i));
    }

    setbundle(newBundle) {
        this.setState(state => (state.bundle = newBundle));
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.bundle.name !== nextProps.defaultBundle.name) {
            return {
                activeIndex: 0,
                bundle: nextProps.defaultBundle,
            };
        }
        return {};
    }

    render() {
        const { activeIndex, bundle } = this.state;
        const { icebars, canUpdateBundle = false, addToCart, setShowCart } = this.props;

        const canOrder = !canUpdateBundle || bundle.quantity >= BUNDLE_MIN_QUANTITY;

        const handleAddToCart = () => {
            if (!canOrder) return;
            addToCart(bundle);
            window.innerWidth <= 650 ? navigate("/cart") : setShowCart(true);
        };

        // return <div>Test</div>;

        return (
            <>
                <CarouselContainer>
                    <Carousel
                        renderArrowNext={() => false}
                        renderArrowPrev={() => false}
                        showStatus={false}
                        showThumbs={false}
                        selectedItem={activeIndex}
                        infiniteLoop={true}
                        interval={2000}
                        onClickItem={() => this.setActiveIndex((activeIndex + 1) % icebars.length)}
                    >
                        {icebars.map((icebar, i) => (
                            <GatsbyImage
                                className="img"
                                key={`${icebar.name}`}
                                image={getImage(icebar.img_create_your_set.localFile)}
                                alt={`${icebar.img_create_your_set.alternativeText}`}
                                loading="eager"
                            />
                        ))}
                    </Carousel>
                    <Button classes="hide--desktop" color="four">
                        <Link
                            to={`/products/icebar-smoothie/${icebars[
                                activeIndex
                            ].name.toLowerCase()}`}
                        >
                            Explore {icebars[activeIndex].name}
                        </Link>
                    </Button>
                </CarouselContainer>
                <ContentsContainer>
                    {bundle.contents.map((bundleItem, i) => (
                        <BundlePickerRow
                            key={i}
                            bundle={bundle}
                            setQuantity={q => this.updateBundle(i, q)}
                            active={activeIndex === i}
                            setActiveIndex={() => this.setActiveIndex(i)}
                            quantity={bundleItem.quantity}
                            canIncrement={bundleItem.quantity < ITEM_MAX_QUANTITY}
                            canDecrement={bundleItem.quantity > ITEM_MIN_QUANTITY}
                            color={icebars[i].color_hex}
                            title={icebars[i].name}
                            disableQuantitySelect={!canUpdateBundle}
                        />
                    ))}
                    <BundlePickerRow
                        title="Total"
                        totalQuantity={bundle.quantity}
                        isTotal
                        noBorders
                    />
                    <Footer>
                        <Button
                            classes={`btn ${!canOrder ? "disabled" : ""}`}
                            onClick={handleAddToCart}
                        >
                            <div className="link-container" disabled={canOrder}>
                                <h4>Add to cart</h4>
                                <h4>{currencyFilter(bundle.price)}</h4>
                            </div>
                        </Button>
                    </Footer>
                </ContentsContainer>
            </>
        );
    }
}

const CarouselContainer = styled.div`
    .img {
        height: 26rem;
    }

    .carousel-root {
        cursor: pointer;
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

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        grid-area: carousel;
        margin-bottom: 0;

        .img {
            height: calc(
                100vh - ${props => props.theme.position.navHeight} -
                    ${props => props.theme.position.pageTitleHeight}
            );
            /* min-height: 29.975rem; */
        }
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) and (min-height: ${props =>
            props.theme.breakpoint.footerDisplayMinHeight}) {
        .img {
            height: calc(
                100vh - ${props => props.theme.position.navHeight} -
                    ${props => props.theme.position.footerHeight} -
                    ${props => props.theme.position.pageTitleHeight} -
                    ${props => props.theme.spacing.xl}
            );
            max-height: 56rem;
        }
    }
`;

const ContentsContainer = styled.div`
    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        grid-area: contents;
        margin-left: 0;
        margin-right: 0;
        border-top: 1px solid ${props => props.theme.color.primary};
        /* margin-bottom: ${props => props.theme.spacing.xxl}; */
    }
`;

const Footer = styled.div`
    .btn {
        z-index: 999;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 1.25rem 1rem;
        border-radius: 0;
    }

    .link-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1.5rem;
    }

    a {
        text-decoration: none;
    }

    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
        .btn {
            z-index: 1;
            position: initial;
            padding: 1rem 1rem;
        }

        @media (min-width: ${props => props.theme.breakpoint.desktop}) {
            .btn {
                padding: 0.5rem 1rem;
            }
        }
    }
`;

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { addToCart, setShowCart })(BundlePicker);
