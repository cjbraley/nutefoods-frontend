import React, { useState } from "react";
import styled from "styled-components";

import ThreeCirclesIcon from "../../../assets/icons/three-circles.svg";
import DiamondIcon from "../../../assets/icons/diamond.svg";
import LeafIcon from "../../../assets/icons/leaf.svg";
import CarrotIcon from "../../../assets/icons/carrot.svg";
import PlantIcon from "../../../assets/icons/plant.svg";

const ICONS = {
    threeCirclesIcon: <ThreeCirclesIcon className="icon" />,
    diamondIcon: <DiamondIcon className="icon" />,
    leafIcon: <LeafIcon className="icon" />,
    carrotIcon: <CarrotIcon className="icon" />,
    plantIcon: <PlantIcon className="icon" />,
};

const Highlights = ({ data }) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    return (
        <>
            <Container>
                {data.map((item, i) => (
                    <div
                        key={i}
                        className={`${i === activeItemIndex ? "active" : ""}`}
                        onClick={() => setActiveItemIndex(i)}
                        onKeyDown={() => setActiveItemIndex(i)}
                        role="button"
                        tabIndex="0"
                    >
                        {ICONS[item.component]}
                    </div>
                ))}
            </Container>
            <Text>{data[activeItemIndex].text}</Text>
        </>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: ${props => props.theme.spacing.s};
    .icon {
        cursor: pointer;
        margin: 0 0.5rem;
        height: 2.75rem;
        width: 2.75rem;
        border-radius: 50%;
        fill: ${props => props.theme.color.primary};
        transition: all 0.35s ease;
        opacity: 0.4;
    }

    .active {
        .icon {
            opacity: 1;
        }
    }
`;

const Text = styled.h5`
    text-align: center;
`;

export default Highlights;
