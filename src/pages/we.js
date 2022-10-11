import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/ui/Layout";
import Seo from "../components/SEO/Seo";
import Breadcrumbs from "../components/general/Breadcrumbs";
import { Carousel } from "react-responsive-carousel";

const We = props => {
    const breadcrumbData = [{ name: "We", path: "/we", disabled: false }];
    const [carouselIndex, setCarouselIndex] = useState(0);
    const data = props.data.allStrapiWeImage.nodes;

    return (
        <Layout>
            <Seo title="We" description="Nature. Purpose. Empowerment." />
            <Wrapper className="page">
                <Breadcrumbs data={breadcrumbData} currentPath={props.location.pathname} />
                <div className="content">
                    <div className="flex">
                        <Carousel
                            className="carousel-container"
                            renderArrowNext={() => false}
                            renderArrowPrev={() => false}
                            showStatus={false}
                            showThumbs={false}
                            selectedItem={carouselIndex}
                            infiniteLoop={true}
                            interval={2000}
                            onClickItem={() => setCarouselIndex((carouselIndex + 1) % data.length)}
                        >
                            {data.map((item, i) => (
                                <GatsbyImage
                                    key={`we-${i}`}
                                    image={getImage(item.image.localFile)}
                                    alt={`${item.title}`}
                                    loading="eager"
                                />
                            ))}
                        </Carousel>
                        <div className="info">
                            <div className="title">
                                <div className="title__number">
                                    <sup>{carouselIndex + 1}.</sup>
                                </div>
                                <div className="title__text">{data[carouselIndex].title}</div>
                            </div>
                            <p
                                className="description"
                                dangerouslySetInnerHTML={{ __html: data[carouselIndex].content }}
                            ></p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Layout>
    );
};

export const query = graphql`
    {
        allStrapiWeImage {
            nodes {
                title
                content
                image {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
                        }
                    }
                }
            }
        }
    }
`;

const Wrapper = styled.div`
    .carousel-root {
        margin-bottom: ${props => props.theme.spacing.xxl};
        cursor: pointer;

        .carousel {
            overflow: initial;
        }
    }

    .control-dots {
        margin-bottom: ${props => props.theme.spacing.l} !important;
        bottom: -3.55rem !important;

        .dot {
            margin: 0 0.25rem !important;
            opacity: 1 !important;
            background-color: ${props => props.theme.color.three} !important;
            box-shadow: none !important;
            height: 0.375rem;
            width: 0.375rem;
        }

        .selected {
            background-color: ${props => props.theme.color.primary} !important;
        }
    }

    .title {
        border-bottom: 1px solid #383b23;
        margin-bottom: 1rem;
        margin-top: 2rem;
        padding: 0 0.75rem;
        display: flex;
        position: relative;

        .title__number {
            font-size: 1.25rem;
            position: absolute;
            left: -0.2rem;
        }

        .title__text {
            font-size: 1.5rem;
        }

        .title__body {
            margin-bottom: 1rem;
        }
    }

    .description {
        margin-bottom: ${props => props.theme.spacing.xxl};
        white-space: pre-line;
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        .content {
            max-width: 72rem;
        }

        .flex {
            display: flex;
        }

        .carousel-container {
            margin-right: ${props => props.theme.spacing.xxl};
        }

        .info {
            min-width: 32rem;
        }
`;

export default We;
