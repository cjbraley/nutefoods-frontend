import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import styled, { useTheme } from "styled-components";

import { useWindowSize } from "../../../use/useWindowSize";

import Layout from "../../../components/ui/Layout";
import Seo from "../../../components/SEO/Seo";
import Breadcrumbs from "../../../components/general/Breadcrumbs";
import DropdownText from "../../../components/general/DropdownText";
import Button from "../../../components/general/Button";
import BundlePicker from "../../../components/bundle/BundlePicker";

const breadcrumbData = [
    { name: "Order", path: "/order", disabled: false },
    { name: "Icebar Smoothie", path: "/order/icebar-smoothie", disabled: true },
    {
        name: "Create Your Set",
        path: `/order/icebar-smoothie/create-your-set`,
        disabled: false,
    },
];

const CreateYourSet = props => {
    const theme = useTheme();
    const { height } = useWindowSize();

    const icebars = props.data.allStrapiIcebar.edges.map(icebar => icebar.node);

    const showFooter = height > parseInt(theme.breakpoint.footerDisplayMinHeight);

    return (
        <Layout hideFooterMobile showFooter={showFooter}>
            <Seo
                title="Icebar Smoothie - Create Your Set"
                description="Create and order your custom icebar smoothie set"
            />
            <Wrapper className="page">
                <div className="header-image hide--desktop">
                    <Breadcrumbs
                        data={breadcrumbData}
                        absolute
                        currentPath={props.location.pathname}
                    />
                    <StaticImage
                        src="../../../assets/images/create-your-own.jpeg"
                        alt="starter-sets"
                        placeholder="blurred"
                        layout="constrained"
                        id="image"
                    ></StaticImage>
                </div>
                <div className="content">
                    <div className="grid">
                        <h1 className="title content-padding">Create Your Set</h1>
                        <div className="info content-padding">
                            <p className="description">
                                If yoü know what your body needs, or yoü have already gotten to know
                                all our icebar smoothies, then why not personalise your bundle to
                                best nourish and please yourself?
                            </p>
                            <div className="dropdown-container">
                                {icebars.map((icebar, i) => (
                                    <DropdownText
                                        key={i}
                                        title={icebar.name}
                                        noPadding
                                        classes="dropdown"
                                    >
                                        <div className="dropdown-content">
                                            <p>
                                                <strong>{icebar.caption}:</strong>{" "}
                                                {icebar.tagline.replace(/<\/?[^>]+(>|$)/g, " ")}
                                            </p>
                                        </div>
                                        <Button color="primary">
                                            <Link
                                                to={`/products/icebar-smoothie/${icebar.name.toLowerCase()}`}
                                            >
                                                Explore {icebar.name}
                                            </Link>
                                        </Button>
                                    </DropdownText>
                                ))}
                            </div>
                        </div>
                        <div className="order-details content-padding">
                            {/* <h2 className="title hide--desktop">Order</h2> */}
                            <p>
                                <strong>
                                    Each icebar costs HK$35. 10% off for all orders at or above
                                    HK$600. Apart from a minimum order quantity of 10, the rest is
                                    entirely in your hands.
                                </strong>
                            </p>
                            <br />
                            <p>
                                <strong>Delivery: </strong>HK Island and Kowloon only. Free for any
                                orders at or above HK$600 (before discounts). Flat fee of HK$40
                                otherwise.
                            </p>
                        </div>
                        <h4 className="select content-padding">Select your icebar smoothies</h4>
                        <BundlePicker
                            icebars={icebars}
                            defaultBundle={{
                                name: "Create Your Set",
                                contents: icebars.map((icebar, i) => ({
                                    name: icebar.name,
                                    quantity: 3,
                                    price: icebar.create_your_set_price,
                                })),
                                quantity: icebars.length * 3,
                                price: icebars.reduce((a, b) => a + 3 * b.create_your_set_price, 0),
                            }}
                            canUpdateBundle
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

    .title {
        margin-bottom: ${props => props.theme.spacing.m};
    }

    .description {
        margin-bottom: ${props => props.theme.spacing.l};
    }

    .dropdown {
        margin-bottom: ${props => props.theme.spacing.l};
        padding: 0;
    }

    .dropdown-container {
        margin-bottom: ${props => props.theme.spacing.xl};
    }
    .dropdown-content {
        padding: 1rem 0.75rem;
    }

    .order-details {
        margin-bottom: ${props => props.theme.spacing.l};
    }

    .select {
        text-align: center;
        margin-bottom: ${props => props.theme.spacing.m};
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        margin-bottom: 0rem;

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
                "info carousel select"
                "info carousel shipping"
                "info carousel contents";
            grid-template-columns: minmax(20.5rem, 36rem) minmax(24rem, 52rem) minmax(
                    20.5rem,
                    36rem
                );
            grid-template-rows: auto auto 1fr auto;
            margin-bottom: 0rem;
        }

        .title {
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

        .select {
            grid-area: select;
            font-size: ${props => props.theme.font.size.xxl};
            font-weight: normal;
            text-align: left;
            margin-top: ${props => props.theme.spacing.l};
            margin-bottom: ${props => props.theme.spacing.l};
            margin-left: ${props => props.theme.spacing.l};
            margin-right: ${props => props.theme.spacing.l};
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
        allStrapiIcebar(sort: { fields: sort_order }) {
            edges {
                node {
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

export default CreateYourSet;
