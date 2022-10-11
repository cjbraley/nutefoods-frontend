import React, { useState } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import CleansesIcon from "../../../assets/icons/functions_cleanses.svg";
import PromotesIcon from "../../../assets/icons/functions_promotes.svg";
import RemovalIcon from "../../../assets/icons/functions_removal.svg";
import ChevronIcon from "../../../assets/icons/chevron.svg";

const ICONS = {
    removal: <CleansesIcon className="icon" />,
    promotes: <PromotesIcon className="icon" />,
    cleanses: <RemovalIcon className="icon" />,
};

const WhatCanIDoForYou = ({ data, images }) => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [activeIngredientIndex, setActiveIngredientIndex] = useState(0);
    const [activeIngredient, setActiveIngredient] = useState(data[0].ingredients[0]);

    const setActive = (categoryIndex, ingredientIndex) => {
        setActiveCategoryIndex(categoryIndex);
        setActiveIngredientIndex(ingredientIndex);
        setActiveIngredient(data[activeCategoryIndex].ingredients[activeIngredientIndex]);
        setShowReferences(false);
    };

    const [showReferences, setShowReferences] = useState(false);

    const getImageData = imageName => images.filter(image => imageName === image.name)[0];

    return (
        <Container>
            {data.map((category, i) => (
                <div key={`category-${i}`} className="category">
                    <div className="category__header">
                        <div className="category___header__icon">{ICONS[category.icon]}</div>
                        <h5 className="category__header__title">{category.title}</h5>
                    </div>

                    <div className="ingredient-img-container">
                        {category.ingredients.map((ingredient, j) => {
                            const image = getImageData(ingredient.imageName);
                            return (
                                <div
                                    key={`ingredient-${j}`}
                                    className="ingredient-img"
                                    onClick={() => setActive(i, j)}
                                    onKeyDown={() => setActive(i, j)}
                                    role="button"
                                    tabIndex="0"
                                >
                                    <GatsbyImage
                                        image={getImage(image.localFile)}
                                        alt={image.alternativeText}
                                        className={`ingredient-img ${
                                            i === activeCategoryIndex && j === activeIngredientIndex
                                                ? "active"
                                                : ""
                                        }`}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {activeCategoryIndex === i && (
                        <div className="activeIngredient">
                            <h5 className="ingredient__title">
                                <strong>{activeIngredient.title}</strong> -{" "}
                                {activeIngredient.tagline}
                            </h5>
                            <div
                                className="ingredient__description text--small"
                                dangerouslySetInnerHTML={{
                                    __html: activeIngredient.description,
                                }}
                            />
                            {activeCategoryIndex === i && (
                                <div
                                    className="reference-header"
                                    onClick={() => setShowReferences(!showReferences)}
                                    onKeyDown={() => setShowReferences(!showReferences)}
                                    role="button"
                                    tabIndex="0"
                                >
                                    References{" "}
                                    {
                                        <ChevronIcon
                                            className={`chevron ${showReferences ? "" : "closed"}`}
                                        />
                                    }
                                </div>
                            )}

                            <div className="references">
                                {showReferences &&
                                    activeIngredient.references.map((ref, k) => (
                                        <h6 key={`reference-${k}`} className="reference">
                                            {ref}
                                        </h6>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </Container>
    );
};

const Container = styled.div`

    .category__header {
        display: flex;
        margin-bottom: ${props => props.theme.spacing.m};
        
        &__title {
            font-weight: bold;
        }
    }

    .icon {
        height: 0.75rem;
        width: 0.75rem;
        margin-right: 0.375rem;
        fill: ${props => props.theme.color.primary}
        stroke: none;
    }

    .ingredient__title {
        margin-bottom: ${props => props.theme.spacing.s};
    }
        
    .ingredient-img-container {
        display: flex;
        flex-wrap: wrap;
        margin-left: 0.25rem;
        margin-right: 0.25rem;
        margin-bottom: ${props => props.theme.spacing.m};

        .ingredient-img {
            width: 20%;

            div {
                width: auto;
                border-radius: 50%;
            }
            img {
                height: 3rem;
                width: 3rem;
                border-radius: 50%;
                background-size: cover;
                opacity: 0.4 !important;
            }

            &.active {
                img {
                    opacity: 1 !important;
                }
            }
        }

    }
    .ingredient__description {
        margin-bottom: ${props => props.theme.spacing.s}
    }

    .reference-header {
        font-size: 0.875rem;
        font-weight: bold;
        margin-bottom: ${props => props.theme.spacing.s};


        .chevron {
            height: 0.75rem;
            width: 0.75rem;
            stroke: ${props => props.theme.color.primary}
        }

        .closed {
                transform: rotate(180deg);
        }
    }

    .references {
        margin-bottom: ${props => props.theme.spacing.l};
    }

    .reference {
        margin-bottom: ${props => props.theme.spacing.xs}
    }
`;

export default WhatCanIDoForYou;
