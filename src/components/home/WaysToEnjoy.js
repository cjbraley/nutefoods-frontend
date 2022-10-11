import React, { useState } from "react";
import styled from "styled-components";

import crunch from "../../assets/images/crunch.gif";
import quench from "../../assets/images/quench.gif";
import ArrowDoubleIcon from "../../assets/icons/arrow-double.svg";

const waysToEnjoy = [
    {
        title: "Crunch",
        text: "Just dive right into the bar.",
        notes: "",
    },
    {
        title: "Quench",
        text: "Blend or simply melt* in a jar of liquid^.",
        notes: "* Give it a good shake after 10-15 minutes for a fuss-free smoothie.\n^ We recommend plant-based milks for extra richness.",
    },
];

const WaysToEnjoy = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Wrapper>
            <div className="header">
                <h4>We recommend two ways to enjoy:</h4>
                <div className="text--small">
                    (but yoü can definitely be more creative than us):
                </div>
            </div>
            <div className="ways-to-enjoy__select">
                <div className="icon-container">
                    <div
                        onClick={() => setActiveIndex(0)}
                        onKeyDown={() => setActiveIndex(0)}
                        role="button"
                        tabIndex="0"
                        className={`circle ${activeIndex === 0 ? "active" : ""}`}
                    >
                        1
                    </div>
                    <ArrowDoubleIcon className="icon" />
                    <div
                        onClick={() => setActiveIndex(1)}
                        onKeyDown={() => setActiveIndex(1)}
                        role="button"
                        tabIndex="0"
                        className={`circle ${activeIndex === 1 ? "active" : ""}`}
                    >
                        2
                    </div>
                </div>
                <div className="divider hide--mobile" />
                <div className="info">
                    <p className="title">({waysToEnjoy[activeIndex].title})</p>
                    <p className="description">{waysToEnjoy[activeIndex].text}</p>
                    <div className="text--footnote">{waysToEnjoy[activeIndex].notes}</div>
                </div>
            </div>
            <div className="carousel">
                {activeIndex === 0 ? (
                    <input
                        className="carousel-image"
                        type="image"
                        src={crunch}
                        alt="crunch"
                        onClick={() => setActiveIndex(1)}
                        onKeyDown={() => setActiveIndex(1)}
                        placeholder="blurred"
                        layout="constrained"
                    />
                ) : (
                    <input
                        className="carousel-image"
                        type="image"
                        src={quench}
                        alt="quench"
                        onClick={() => setActiveIndex(0)}
                        onKeyDown={() => setActiveIndex(0)}
                        placeholder="blurred"
                        layout="constrained"
                    />
                )}
            </div>
        </Wrapper>
    );
};

export default WaysToEnjoy;

const Wrapper = styled.div`
    border-top: 1px solid ${props => props.theme.color.primary};
    background-color: ${props => props.theme.color.three};
    padding-top: ${props => props.theme.spacing.l};
    margin-bottom: ${props => props.theme.spacing.xxl};
    text-align: center;

    .header {
        margin-bottom: ${props => props.theme.spacing.xl};
    }

    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: ${props => props.theme.spacing.m} 0;

        .icon {
            cursor: pointer;
            height: 2.75rem;
            width: 2.75rem;
            stroke: ${props => props.theme.color.primary};
            width: 4rem;
            height: 1rem;
            fill: none;
            margin: 0 ${props => props.theme.spacing.s};
        }

        .circle {
            height: 2rem;
            line-height: 2rem;
            width: 2rem;
            background-color: ${props => props.theme.color.primary};
            border-radius: 50%;
            color: #d8c7ae;
            text-align: center;
            opacity: 0.4;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
            }
        }

        .active {
            opacity: 1;
        }
    }

    .info {
        white-space: pre-wrap;
        min-height: 8rem;

        .title {
            margin-bottom: ${props => props.theme.spacing.xs};
        }

        .description {
            margin-bottom: ${props => props.theme.spacing.m};
        }

        .text--footnote {
            margin-bottom: ${props => props.theme.spacing.l};
        }
    }

    .carousel {
        padding-top: 100%;
        position: relative;
        background-color: ${props => props.theme.color.primary};

        input {
            cursor: pointer;
            margin: 0 auto;
            display: block;
            width: 100%;
            height: auto;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        display: grid;
        grid-template-areas: "ways carousel select";
        grid-template-columns: minmax(22.5rem, 1fr) minmax(10rem, 35rem) minmax(22.5rem, 1fr);
        grid-template-rows: auto;
        justify-content: space-between;
        padding-top: 0;
        margin-bottom: 0;
        border-top: 1px solid ${props => props.theme.color.primary};
        border-bottom: 1px solid ${props => props.theme.color.primary};

        .header {
            grid-area: ways;
            margin-top: ${props => props.theme.spacing.l};
            margin-left: ${props => props.theme.spacing.l};
            margin-right: ${props => props.theme.spacing.l};
        }

        .ways-to-enjoy__select {
            grid-area: select;
            padding: 0rem ${props => props.theme.spacing.l};

            .icon-container {
                height: 50%;
                margin-bottom: 0;
            }

            .info {
                height: 50%;
                display: flex;
                flex-direction: column;
                justify-content: center;

                .title {
                    font-size: ${props => props.theme.font.size.xxl};
                    font-family: "Nib";
                    font-style: italic;
                }

                .description {
                    font-size: ${props => props.theme.font.size.l};
                }
            }
        }

        .carousel {
            grid-area: carousel;
            background-color: ${props => props.theme.color.primary};

            .carousel-image {
                max-height: 42rem;
                max-width: 42rem;
                width: 100%;
                object-fit: cover;
            }
        }
    }
`;
