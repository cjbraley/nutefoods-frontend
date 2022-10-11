import React, { useState } from "react";
import styled from "styled-components";

import threeCirclesIcon from "../../assets/icons/three-circles.svg";
import diamondIcon from "../../assets/icons/diamond.svg";
import leafIcon from "../../assets/icons/leaf.svg";
import carrotIcon from "../../assets/icons/carrot.svg";
import plantIcon from "../../assets/icons/plant.svg";

const icebarIcons = [
    {
        icon: threeCirclesIcon,
        text: "Low in GI (Glycemic Index)",
    },
    {
        icon: diamondIcon,
        text: "Packed with Superfoods",
    },
    {
        icon: leafIcon,
        text: "A Source of Fibre",
    },
    {
        icon: carrotIcon,
        text: "Vegan",
    },
    {
        icon: plantIcon,
        text: "Wholly Natural",
    },
];

const OurIcebars = () => {
    const [activeIcon, setActiveIcon] = useState(0);

    return (
        <Wrapper>
            <h4 className="title hide--desktop">All our icebar smoothies are:</h4>
            <h2 className="title hide--mobile">All our icebar smoothies are:</h2>

            <div className="our-icebars__icons">
                {icebarIcons.map((item, i) => (
                    <item.icon
                        key={i}
                        className={`our-icebars__icons__icon ${i === activeIcon ? "active" : ""}`}
                        onClick={() => setActiveIcon(i)}
                    />
                ))}
            </div>
            <p>{icebarIcons[activeIcon].text}</p>
        </Wrapper>
    );
};

export default OurIcebars;

const Wrapper = styled.div`
    text-align: center;
    margin-bottom: ${props => props.theme.spacing.xl};

    .our-icebars {
        text-align: center;
        margin-bottom: ${props => props.theme.spacing.l};

        &__icons {
            display: flex;
            justify-content: center;
            margin-top: ${props => props.theme.spacing.s};
            margin-bottom: ${props => props.theme.spacing.l};

            &__icon {
                cursor: pointer;
                height: 2.75rem;
                width: 2.75rem;
                margin: 0 ${props => props.theme.spacing.s};
                fill: #383b23;
                stroke: none;
                opacity: 0.4;
                transition: opacity ease 0.5s;

                &:hover {
                    opacity: 1;
                }
            }

            .active {
                opacity: 1;
            }
        }
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        margin-bottom: ${props => props.theme.spacing.xxl};

        .our-icebars {
            &__icons {
                margin-top: ${props => props.theme.spacing.l};
                &__icon {
                    height: 3.25rem;
                    width: 3.25rem;
                    margin: 0 ${props => props.theme.spacing.s};
                }
            }
        }

        p {
            font-size: ${props => props.theme.font.size.xl};
            text-decoration: underline;
        }
    }
`;
