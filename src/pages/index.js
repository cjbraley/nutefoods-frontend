import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/ui/Layout";
import Button from "../components/general/Button";
import Seo from "../components/SEO/Seo";

import Cover from "../components/home/Cover";
import Functions from "../components/home/Functions";
import OurIcebars from "../components/home/OurIcebars";
import WaysToEnjoy from "../components/home/WaysToEnjoy";
import ProductInfo from "../components/home/ProductInfo";

const Home = props => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allStrapiIcebar(sort: { fields: name }) {
                nodes {
                    alt_name
                    color_hex
                    id
                    name
                    tagline
                    img_carousel {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                            }
                        }
                    }
                }
            }
        }
    `);

    useEffect(() => {
        if (props.location.hash === "#content") {
            setTimeout(
                () => window.scrollTo({ top: getHeight("content"), behavior: "smooth" }),
                10
            );
        }
    });

    const icebars = data.allStrapiIcebar.nodes;
    const [alt, setAlt] = useState(true);

    const handleScroll = event => {
        const scrollPosition = window.pageYOffset;
        if (
            scrollPosition <=
            (getHeight("image") > 0 ? getHeight("image") : getHeight("content")) - 1
        ) {
            setAlt(true);
        } else {
            setAlt(false);
        }
    };
    const getHeight = id => {
        const yOffset = 0; //-70;
        const element = document.getElementById(id);
        if (!element || !element.offsetParent) return 0;
        const header = document.getElementById("nav");
        const headerOffset = header.getBoundingClientRect().height;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset - headerOffset;
        return y;
    };

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
    });

    return (
        <Layout $alt={alt}>
            <Cover />
            <Seo
                title="Home"
                description="nüte - Icebar Smoothies - Frozen smoothies with all the nutrition, zero fuss."
            />
            <Wrapper>
                <div className="page">
                    <StaticImage
                        id="image"
                        src="../assets/images/icebars.jpeg"
                        alt="icebars"
                        placeholder="blurred"
                        layout="constrained"
                        className="header-image hide--desktop"
                    />
                    <div className="content" id="content">
                        <Link to="/order" className="order order--desktop">
                            <Button color="four">Order our first line of creation now</Button>
                        </Link>
                        <div className="intro">
                            <div className="intro__header">
                                <h1 className="page-title intro__title">Icebar Smoothies</h1>
                            </div>
                            <div className="intro__body">
                                <p>
                                    Fresh nourishment,
                                    <br />
                                    anywhere, anytime, everyday.
                                    <br />
                                    <br />
                                    Reimagining smoothies with all the nütrition,
                                    <br />
                                    but prep- and fuss-free.
                                    <br />
                                    <br />
                                    Made only with natüre and frozen to last,
                                    <br />
                                    each bar is backed by science to deliver specific benefits to
                                    your body.
                                </p>
                            </div>
                        </div>

                        <Link to="/order" className="order hide--desktop">
                            <Button color="four">Order our first line of creation now</Button>
                        </Link>

                        <div className="divider hide--desktop"></div>

                        <Functions icebars={icebars} />
                        <OurIcebars />
                        <WaysToEnjoy />
                        <ProductInfo />
                    </div>
                </div>
            </Wrapper>
        </Layout>
    );
};

export default Home;

const Wrapper = styled.div`
    flex: 1;
    padding-bottom: ${props => props.theme.spacing.xxl};
    background: ${props => props.theme.color.secondary};

    .content {
        max-width: 32rem;
        margin-left: auto;
        margin-right: auto;
    }

    .header-image {
        margin-bottom: ${props => props.theme.spacing.l};
    }

    .page-title {
        margin-top: ${props => props.theme.spacing.xxl};
        margin-bottom: ${props => props.theme.spacing.l};
    }

    .intro {
        margin-bottom: ${props => props.theme.spacing.xxl};
    }

    .order {
        display: block;
        position: sticky;
        top: ${props => props.theme.position.navHeight};
        z-index: 1;
    }

    .order--desktop {
        display: none;
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        padding-top: ${props => props.theme.spacing.xxl};
        padding-bottom: 0;

        .content {
            max-width: none;
            position: relative;
        }

        .order {
            display: block;
            grid-area: button;
            width: 20rem;
            top: 5.25rem;
            height: 0;
            align-self: flex-start;
            position: sticky;
            z-index: 99;
            left: 100%;
            margin-right: 1rem;
        }

        .intro {
            margin-bottom: 3rem;

            .intro__header {
                display: flex;
                .intro__title {
                    margin-top: 0;
                }
            }
        }

        .hide--mobile {
            display: block;
        }

        .hide--desktop {
            display: none;
        }
    }
`;
