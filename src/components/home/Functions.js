import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Button from "../general/Button";

const Functions = ({ icebars }) => {
    const [activeIcebar, setActiveIcebar] = useState(0);
    const [carouselImage, setCarouselImage] = useState(0);

    return (
        <Wrapper>
            <h4 className="functions__header">
                Four goodies. <br className="desktop--show" />
                Four functions. <br className="desktop--show" />
                For yoü.
            </h4>
            <div className="functions__select">
                {icebars.map(({ name, id, tagline, alt_name }, index) => (
                    <button
                        key={id}
                        className={`functions__select__item ${
                            index === activeIcebar ? "active" : ""
                        }`}
                        onClick={() => setActiveIcebar(index)}
                        onKeyDown={() => setActiveIcebar(index)}
                    >
                        {name}
                    </button>
                ))}
            </div>

            <Carousel
                className="carousel"
                renderArrowNext={() => false}
                renderArrowPrev={() => false}
                showStatus={false}
                showThumbs={false}
                selectedItem={carouselImage}
                infiniteLoop={true}
                interval={2000}
                onClickItem={() =>
                    setCarouselImage(
                        (carouselImage + 1) % icebars[activeIcebar].img_carousel.length
                    )
                }
            >
                {icebars[activeIcebar].img_carousel.map((image, i) => (
                    <GatsbyImage
                        key={`${icebars[activeIcebar].id}-${i}`}
                        image={getImage(image.localFile)}
                        alt={`${icebars[activeIcebar].name}-${i}`}
                        loading="eager"
                    />
                ))}
            </Carousel>

            <div className="functions__details">
                <h1>{icebars[activeIcebar].alt_name}</h1>
                <p dangerouslySetInnerHTML={{ __html: icebars[activeIcebar].tagline }} />
                <Link to={`/products/icebar-smoothie/${icebars[activeIcebar].name.toLowerCase()}`}>
                    <Button color="primary">Explore {icebars[activeIcebar].name}</Button>
                </Link>
            </div>
        </Wrapper>
    );
};

export default Functions;

const Wrapper = styled.div`
    background-color: ${props => props.theme.color.three};
    padding-top: ${props => props.theme.spacing.m};
    margin-bottom: ${props => props.theme.spacing.xl};
    text-align: center;

    .functions__header {
        margin-bottom: ${props => props.theme.spacing.m};
    }

    .functions__select {
        display: flex;
        justify-content: center;
        margin-bottom: ${props => props.theme.spacing.m};

        &__item {
            opacity: 0.4;
            margin: 0 0.875rem;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }

        .active {
            opacity: 1;
            text-decoration: underline;
        }
    }

    .carousel-root {
        margin-bottom: ${props => props.theme.spacing.l};
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

    .functions__details {
        text-align: center;

        h1 {
            margin-bottom: ${props => props.theme.spacing.m};
        }

        p {
            font-family: "Nib", sans-serif;
            font-style: italic;
            font-weight: normal;
            font-size: 1.125rem;
            height: 3rem;
            margin-bottom: ${props => props.theme.spacing.l};
            line-height: 100%;
            white-space: pre-line;
        }
    }

    .desktop--show {
        display: none;
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        display: grid;
        grid-template-areas:
            "header carousel select"
            "header carousel details";
        grid-template-columns: minmax(22.5rem, 1fr) minmax(10rem, 35rem) minmax(22.5rem, 1fr);
        grid-template-rows: 5rem auto;
        align-items: start;
        padding-top: 0;
        margin-bottom: ${props => props.theme.spacing.xxl};
        border-top: 1px solid ${props => props.theme.color.primary};
        border-bottom: 1px solid ${props => props.theme.color.primary};

        .functions__header {
            grid-area: header;
            margin-top: ${props => props.theme.spacing.l};
            text-align: left;
            padding-left: ${props => props.theme.spacing.l};
            font-size: ${props => props.theme.font.size.xxl};
        }

        .carousel {
            grid-area: carousel;
            margin-bottom: 0;
        }

        .functions__select {
            grid-area: select;
            margin-top: ${props => props.theme.spacing.l};
            margin-bottom: ${props => props.theme.spacing.l};
            justify-content: space-around;
            margin-left: ${props => props.theme.spacing.l};
            margin-right: ${props => props.theme.spacing.l};

            &__item {
                margin: 0;
            }
        }

        .functions__details {
            grid-area: details;
            margin-left: ${props => props.theme.spacing.l};
            margin-right: ${props => props.theme.spacing.l};
        }

        .desktop--show {
            display: block;
        }
    }
`;
