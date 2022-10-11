import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Button from "../../../components/general/Button";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Seo from "../../../components/SEO/Seo";
import Layout from "../../../components/ui/Layout";
import Breadcrumbs from "../../../components/general/Breadcrumbs";
import IcebarSelect from "../../../components/products/icebar-smoothie/IcebarSelect";
import Nutrition from "../../../components/products/icebar-smoothie/nutrition/Nutrition";
import DropdownText from "../../../components/general/DropdownText";
import Ingredients from "../../../components/products/icebar-smoothie/Ingredients";
import WhatCanIDoForYou from "../../../components/products/icebar-smoothie/WhatCanIDoForYou";
import TryMe from "../../../components/products/icebar-smoothie/TryMe";
import Highlights from "../../../components/products/icebar-smoothie/Highlights";

const Icebar = props => {
    const {
        name,
        tagline,
        description,
        img_icebar,
        img_smoothie,
        ingredients,
        img_ingredients,
        nutrition: { strapi_json_value: nutrition },
        whatCanIDoForYou: { strapi_json_value: whatCanIDoForYou },
        tryMe,
        highlights: { strapi_json_value: highlights },
    } = props.data.strapiIcebar;

    const breadcrumbData = [
        { name: "Products", path: "/products", disabled: true },
        { name: "Icebar Smoothie", path: "/products/icebar-smoothie", disabled: true },
        { name: name, path: `/products/icebar-smoothie/${name.toLowerCase()}`, disabled: false },
    ];

    const images = [img_icebar, img_smoothie];
    const [activeImage, setActiveImage] = useState(0);

    const toggleImage = () => {
        setActiveImage((activeImage + 1) % images.length);
    };

    return (
        <Layout>
            <Seo title="Icebar Smoothie" description={`Icebar Smoothie - ${name} - Product Info`}/>
            <Wrapper className="page">
                <div className="header-container">
                    <Breadcrumbs data={breadcrumbData} currentPath={props.location.pathname} />
                    <IcebarSelect activeIcebar={name} />
                </div>
                <div className="content">
                    <h1 className="title hide--mobile">{name}</h1>
                    <div className="grid">
                        <div className="img-container">
                            <div className="icebar-img__titles">
                                {images.map((image, i) => (
                                    <div
                                        key={i}
                                        className={`${activeImage === i ? "active" : ""}`}
                                        onClick={() => setActiveImage(i)}
                                        onKeyDown={() => setActiveImage(i)}
                                        role="button"
                                        tabIndex="0"
                                    >
                                        {image.caption}
                                    </div>
                                ))}
                            </div>
                            <div
                                className="img-event-handle"
                                onClick={() => toggleImage()}
                                onKeyDown={() => toggleImage()}
                                role="button"
                                tabIndex="0"
                            >
                                <GatsbyImage
                                    image={getImage(images[activeImage].localFile)}
                                    alt={images[activeImage].alternativeText}
                                    className="icebar-img__image"
                                />
                            </div>
                            <div className="icebar-img__number">{activeImage + 1}</div>
                        </div>

                        <div className="description-container">
                            <h1 className="title hide--desktop">{name}</h1>
                            <h4
                                className="subtitle"
                                dangerouslySetInnerHTML={{ __html: tagline }}
                            />
                            <p dangerouslySetInnerHTML={{ __html: description }} />
                        </div>

                        <div className="info-container">
                            <DropdownText title="Ingredients">
                                <Ingredients data={ingredients} />
                            </DropdownText>

                            <DropdownText title="What can I do for yoü?">
                                <WhatCanIDoForYou
                                    data={whatCanIDoForYou}
                                    images={img_ingredients}
                                />
                            </DropdownText>

                            <DropdownText title={tryMe.title}>
                                <TryMe data={tryMe.items} />
                            </DropdownText>

                            <DropdownText title="I am">
                                <Highlights data={highlights} />
                            </DropdownText>

                            <DropdownText title="Nütrion Facts">
                                <Nutrition data={nutrition} />
                            </DropdownText>
                        </div>

                        <div className="button-container">
                            <Button color="primary">
                                <Link to="/order/icebar-smoothie/starter-set">
                                    Try starter set with {name}
                                </Link>
                            </Button>
                            <Button color="four">
                                <Link to="/order/icebar-smoothie/create-your-set">
                                    Or, create your own set
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Layout>
    );
};

const Wrapper = styled.div`
    .header-container {
        margin-bottom: ${props => props.theme.spacing.m};
    }
    .img-container {
        position: relative;
        margin-bottom: ${props => props.theme.spacing.m};

        .icebar-img__titles {
            display: flex;
            cursor: pointer;
            position: absolute;
            z-index: 1;
            top: ${props => props.theme.spacing.s};
            left: ${props => props.theme.spacing.m};

            color: ${props => props.theme.color.three};

            div {
                margin-right: ${props => props.theme.spacing.s};
            }

            .active {
                text-decoration: underline;
            }
        }

        .icebar-img__image {
            height: 24rem;
        }

        .icebar-img__number {
            position: absolute;
            z-index: 1;
            right: ${props => props.theme.spacing.m};
            bottom: ${props => props.theme.spacing.s};
            color: ${props => props.theme.color.three};
        }
    }

    .description-container {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: ${props => props.theme.spacing.xl};

        .title {
            margin-bottom: ${props => props.theme.spacing.s};
        }

        h4 {
            font-family: "Nib", sans-serif;
            font-style: italic;
            text-align: center;
            margin-bottom: ${props => props.theme.spacing.l};
        }
    }

    .button-container {
        margin-bottom: ${props => props.theme.spacing.xxl};

        button {
            margin-bottom: ${props => props.theme.spacing.s};
        }

        a {
            text-decoration: none;
        }
    }

    .info-container {
        margin-bottom: ${props => props.theme.spacing.xl};
    }

    // custom scrollbar
    *::-webkit-scrollbar {
        width: 0.5rem;
    }
    /* Handle */
    *::-webkit-scrollbar-thumb {
        background: ${props => props.theme.color.primary};
        border-radius: 4px;
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        .content {
            max-width: 128rem;
        }

        .subtitle {
            grid-area: description;
        }

        .header-container {
            display: flex;
            flex-basis: auto;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 0;
        }

        .function-circle {
            height: 1.5rem;
            width: 1.5rem;
            margin: 0 0.75rem;
        }

        .expand-functions {
            align-self: flex-start;
            .icon__chevron {
                height: 0.875rem;
                width: 0.875rem;
                margin-left: auto;
            }
        }

        .grid {
            /* height: 31rem; */
            height: calc(100vh - 20.025rem);
            min-height: 32rem;
            // max-width: 125rem;
            display: grid;
            grid-template-areas:
                "description carousel info"
                "buttons carousel info";
            grid-template-columns: minmax(24.5rem, 1fr) minmax(21.5rem, 40rem) minmax(24.5rem, 1fr);
            grid-template-rows: auto 1fr;
            border-top: 1px solid ${props => props.theme.color.primary};
            margin-bottom: 0rem;
        }

        .img-container {
            grid-area: carousel;
            height: 100%;
            margin-bottom: 0;
            // max-height: 40rem;

            .img-event-handle {
                height: 100%;
            }

            .icebar-img__image {
                height: 100%;
            }
        }

        .title {
            margin-top: ${props => props.theme.spacing.l};
            margin-bottom: ${props => props.theme.spacing.l};
            margin-left: ${props => props.theme.spacing.l};
        }

        .description-container {
            grid-area: description;
            align-items: flex-start;
            margin-top: ${props => props.theme.spacing.xl};
            padding: 0 ${props => props.theme.spacing.l};

            .subtitle {
                text-align: left;
            }
        }

        .button-container {
            grid-area: buttons;
            padding: 0 ${props => props.theme.spacing.l};
            max-width: 27.5rem;
        }

        .info-container {
            grid-area: info;
            overflow-y: auto;
            margin-top: ${props => props.theme.spacing.l};
            padding: 0 ${props => props.theme.spacing.l};
            max-height: calc(100% - 3rem);
        }

        .hide--mobile {
            display: block;
        }

        .hide--desktop {
            display: none;
        }

        .hide--short {
            display: none;
        }
    }
`;

export const query = graphql`
    query GetIcebar($name: String) {
        strapiIcebar(name: { eq: $name }) {
            name
            tagline
            description
            img_icebar {
                name
                caption
                alternativeText
                localFile {
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
                    }
                }
            }
            img_smoothie {
                name
                caption
                alternativeText
                localFile {
                    childImageSharp {
                        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
                    }
                }
            }
            img_ingredients {
                name
                alternativeText
                localFile {
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
                    }
                }
            }
            color_hex
            whatCanIDoForYou {
                id
                strapi_json_value {
                    title
                    icon
                    ingredients {
                        description
                        imageName
                        references
                        tagline
                        title
                    }
                }
            }
            nutrition {
                strapi_json_value {
                    dailyValue
                    name
                    servingAmount
                    servingIcon
                    subItems {
                        dailyValue
                        name
                        servingAmount
                        servingIcon
                    }
                }
            }
            tryMe {
                title
                items
            }
            ingredients
            highlights {
                strapi_json_value {
                    component
                    text
                }
            }
        }
    }
`;

export default Icebar;
