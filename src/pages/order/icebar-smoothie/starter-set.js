import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import styled from "styled-components";

import { currencyFilter } from "../../../utils";

import Layout from "../../../components/ui/Layout";
import Seo from "../../../components/SEO/Seo";
import Breadcrumbs from "../../../components/general/Breadcrumbs";
import BundlePicker from "../../../components/bundle/BundlePicker";
import Tags from "../../../components/starter-set/Tags";

const breadcrumbData = [
    { name: "Order", path: "/order", disabled: false },
    { name: "Icebar Smoothie", path: "/order/icebar-smoothie", disabled: true },
    { name: "Starter Set", path: `/order/icebar-smoothie/starter-set`, disabled: false },
];

const StarterSet = props => {
    const sets = props.data.allStrapiStarterSet.nodes;
    const categories = [...new Set(sets.map(set => set.category))];

    const [activeSetIndex, setActiveSetIndex] = useState(0);
    const activeSet = sets[activeSetIndex];

    const [activeBundleIndex, setActiveBundleIndex] = useState(0);
    const activeBundle = activeSet.bundles[activeBundleIndex];

    return (
        <Layout hideFooterMobile>
            <Seo
                title="Icebar Smoothie - Starter Set"
                description="Order your icebar smoothie starter set"
            />
            <Wrapper className="page">
                <div className="header-image hide--desktop">
                    <Breadcrumbs
                        data={breadcrumbData}
                        absolute
                        currentPath={props.location.pathname}
                    />
                    <StaticImage
                        src="../../../assets/images/starter-sets.jpeg"
                        alt="starter-sets"
                        placeholder="blurred"
                        layout="constrained"
                        className="header-image"
                        id="image"
                    ></StaticImage>
                </div>
                <div className="content">
                    <div className="grid">
                        <h1 className="page-title content-padding">Starter Sets</h1>
                        <div className="categories content-padding">
                            <div className="area-header hide--mobile">Choose your set:</div>
                            {categories.map(category => (
                                <div key={category} className="category-container">
                                    <h6 className="title">By {category}:</h6>
                                    <div className="category-sets">
                                        {sets.map((set, i) => {
                                            if (set.category !== category) return null;
                                            return (
                                                <div
                                                    key={i}
                                                    className={`category-set ${
                                                        activeSetIndex === i ? "active" : ""
                                                    }`}
                                                    onClick={() => setActiveSetIndex(i)}
                                                    onKeyPress={() => setActiveSetIndex(i)}
                                                    role="button"
                                                    tabIndex="0"
                                                >
                                                    {set.name}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="divider hide--desktop content-padding" />
                        <div className="info content-padding">
                            <h2 className="section-title">{activeSet.name}</h2>
                            {activeSet.icebars.length <= 2 && (
                                <Tags classes="tags" items={activeSet.icebars} />
                            )}
                            <h3 className="tagline">{activeSet.tagline}</h3>
                            <p dangerouslySetInnerHTML={{ __html: activeSet.description }} />
                        </div>
                        <div className="divider content-padding hide--desktop " />

                        <div className="order-details content-padding">
                            {/* <h2 className="section-title">Order</h2> */}
                            <p>
                                <strong>10% off for all orders at or above HK$600.</strong>
                            </p>
                            <br />
                            <p>
                                <strong>Delivery: </strong>HK Island and Kowloon only. Free for any
                                orders at or above HK$600 (before discounts). Flat fee of HK$40
                                otherwise.
                            </p>
                        </div>
                        <div className="bundle-choose content-padding">
                            <div className="area-header hide--mobile">Choose your set:</div>
                            <div className="bundles">
                                {activeSet.bundles.map((bundle, i) => (
                                    <button
                                        key={i}
                                        className={`bundles__item ${
                                            i === activeBundleIndex ? "active" : ""
                                        }`}
                                        onClick={() => setActiveBundleIndex(i)}
                                        onKeyDown={() => setActiveBundleIndex(i)}
                                        tabIndex="0"
                                    >
                                        <p>
                                            Bundle of {bundle.quantity}:{" "}
                                            {currencyFilter(bundle.price)}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <BundlePicker
                            icebars={activeSet.icebars}
                            defaultBundle={{
                                ...activeBundle,
                                contents: activeBundle.contents.strapi_json_value,
                            }}
                        />
                    </div>
                </div>
            </Wrapper>
        </Layout>
    );
};

const Wrapper = styled.div`
    margin-bottom: 4rem;

    .content {
        padding-top: ${props => props.theme.spacing.l};
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
    }

    .content-padding {
        padding-left: ${props => props.theme.position.contentPadding};
        padding-right: ${props => props.theme.position.contentPadding};
    }

    a {
        text-decoration: none;
        font-family: Nib, sans-serif;
    }

    .divider {
        margin-top: ${props => props.theme.spacing.l};
        margin-bottom: ${props => props.theme.spacing.l};
    }

    .page-title {
        margin-bottom: ${props => props.theme.spacing.m};
    }

    .category-container {
        margin-bottom: ${props => props.theme.spacing.m};

        .title {
            font-weight: bold;
            font-size: 0.75rem;
            margin-bottom: ${props => props.theme.spacing.s};
        }
        .category-sets {
            display: flex;
        }

        .category-set {
            cursor: pointer;
            margin-right: ${props => props.theme.spacing.m};
            opacity: 0.4;

            &.active {
                opacity: 1;
                text-decoration: underline;
            }

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .section-title {
        margin-bottom: ${props => props.theme.spacing.m};
    }

    .tags {
        margin-bottom: ${props => props.theme.spacing.m};
    }

    .tagline {
        margin-bottom: ${props => props.theme.spacing.m};
    }

    .order-details {
        margin-bottom: ${props => props.theme.spacing.m};
    }

    .bundle-choose {
        .bundles {
            display: flex;
            justify-content: space-around;
            margin-bottom: ${props => props.theme.spacing.l};

            &__item {
                cursor: pointer;
                opacity: 0.7;
                &:hover {
                    border-bottom: 1px solid;
                }
            }
        }

        .active {
            opacity: 1;
            border-bottom: 1px solid ${props => props.theme.color.primary};
        }
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        margin-bottom: 0;

        .content {
            max-width: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .content-padding {
            padding-left: 0;
            padding-right: 0;
        }

        .grid {
            min-height: 30rem;
            height: calc(100vh - ${props => props.theme.position.navHeight});
            /* max-height: calc(rem + ${props => props.theme.position.pageTitleHeight}); */
            // max-width: 125rem;
            margin-left: auto;
            margin-right: auto;
            display: grid;
            grid-template-areas:
                "title title title"
                "bundle carousel info"
                "categories carousel info"
                "shipping carousel contents";
            grid-template-columns: minmax(20.5rem, 36rem) minmax(24rem, 52rem) minmax(
                    20.5rem,
                    36rem
                );
            grid-template-rows: auto auto 1fr auto;
            margin-bottom: 0rem;
        }

        .page-title {
            grid-area: title;
            height: ${props => props.theme.position.pageTitleHeight};
            width: 100%;
            display: flex;
            align-items: center;
            border-bottom: 1px solid ${props => props.theme.color.primary};
            margin-bottom: 0;
            margin-top: 0;
        }

        .info {
            grid-area: info;
            margin-top: ${props => props.theme.spacing.l};
            margin-bottom: ${props => props.theme.spacing.l};
            margin-left: ${props => props.theme.spacing.l};
            margin-right: ${props => props.theme.spacing.l};
        }

        .categories {
            grid-area: categories;
            margin-top: ${props => props.theme.spacing.l};
            margin-bottom: ${props => props.theme.spacing.l};
            margin-left: ${props => props.theme.spacing.l};
            margin-right: ${props => props.theme.spacing.l};
        }

        .bundle-choose {
            grid-area: bundle;
            margin-top: ${props => props.theme.spacing.l};
            margin-bottom: 0;
            margin-left: ${props => props.theme.spacing.l};
            margin-right: ${props => props.theme.spacing.l};

            .bundles {
                justify-content: flex-start;
                flex-wrap: wrap;

                &__item {
                    margin-right: ${props => props.theme.spacing.l};
                    margin-bottom: ${props => props.theme.spacing.l};
                }
            }
        }

        .area-header {
            font-style: italic;
            font-weigth: lighter;
            font-family: "Nib", sans-serif;
            font-size: 0.75rem;
            margin-bottom: ${props => props.theme.spacing.s};
            opacity: 0.7;
        }

        .order-details {
            grid-area: shipping;
            align-self: flex-start;
            margin-left: ${props => props.theme.spacing.l};
            margin-right: ${props => props.theme.spacing.l};
        }
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) and (min-height: ${props =>
            props.theme.breakpoint.footerDisplayMinHeight}) {
        .grid {
            height: calc(
                100vh - ${props => props.theme.position.navHeight} -
                    ${props => props.theme.position.footerHeight} -
                    ${props => props.theme.spacing.xl}
            );
            max-height: calc(56rem + ${props => props.theme.position.pageTitleHeight});
        }
    }
`;

export const query = graphql`
    {
        allStrapiStarterSet {
            nodes {
                bundles {
                    price
                    name
                    quantity
                    contents {
                        strapi_json_value {
                            name
                            quantity
                        }
                    }
                }
                name
                category
                tagline
                description
                icebars {
                    name
                    tagline
                    caption
                    create_your_set_price
                    color_hex
                    img_create_your_set {
                        alternativeText
                        localFile {
                            childImageSharp {
                                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default StarterSet;
