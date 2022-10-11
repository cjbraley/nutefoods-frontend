import React, { useState } from "react";
import styled from "styled-components";

import Layout from "../components/ui/Layout";
import Breadcrumbs from "../components/general/Breadcrumbs";
import Seo from "../components/SEO/Seo";
import DropdownText from "../components/general/DropdownText";

import data from "../data/FAQ";

const Faq = props => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    const handleCategoryChange = i => {
        setActiveCategoryIndex(i);
        scrollTo(data[i].category);
    };

    const scrollTo = hash => {
        const id = hash;
        const yOffset = -10;
        const element = document.getElementById(id);
        console.log(element);
        const header = document.getElementById("Nav");
        const headerOffset = header.getBoundingClientRect().height;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset - headerOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    const breadcrumbData = [{ name: "FAQ", path: "/faq", disabled: false }];

    return (
        <Layout>
            <Seo title="FAQ" description="For those curious about us" />
            <Wrapper className="page">
                <Breadcrumbs data={breadcrumbData} currentPath={props.location.pathname} />
                <div className="content">
                    <h1 className="page-title">FAQ</h1>
                    <h6 className="page-subtitle">By Category:</h6>
                    <div className="categories">
                        {data.map((category, i) => (
                            <div
                                key={`header-${category.category}`}
                                className={`categories__item ${
                                    activeCategoryIndex === i ? "active" : ""
                                }`}
                                role="button"
                                tabIndex="0"
                                onClick={() => handleCategoryChange(i)}
                                onKeyDown={() => handleCategoryChange(i)}
                            >
                                {category.category}
                            </div>
                        ))}
                    </div>
                    {data.map((category, i) => {
                        return (
                            <div
                                key={category.category}
                                id={category.category}
                                className="category"
                            >
                                <h5 className="category__title">{category.category}</h5>
                                {category.questions.map((question, j) => {
                                    return (
                                        <div
                                            key={`${category.category}-${j}`}
                                            className="category__question"
                                        >
                                            <DropdownText title={question.title}>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: question.body,
                                                    }}
                                                    className="text--small"
                                                ></div>
                                            </DropdownText>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}

                    <h5 className="contact-title">Still thirsty for answers?</h5>
                    <div className="contact-body">
                        Let us do the quenching. Send us a message on{" "}
                        <a href="https://www.instagram.com/nutefoods">@nutefoods</a> or{" "}
                        <a href="mailto:hello@nutefoods.com">hello@nutefoods.com</a>
                    </div>
                </div>
            </Wrapper>
        </Layout>
    );
};

export default Faq;

const Wrapper = styled.div`
      margin-bottom: ${props => props.theme.spacing.xxl};


    .page-title {
        margin-bottom: ${props => props.theme.spacing.l};
    }
    .page-subtitle {
        margin-bottom: 0.5rem;
        font-weight: bold;
    }

    .categories::before,
    .categories::after {
        content: "";
        width: 100%;
        order: 1;
    }

    .categories {
        display: flex;
        flex-flow: row wrap;
        margin-bottom: 1.5rem;

        &__item {
            cursor: pointer;
            font-size: 1.125rem;
            margin-bottom: 0.2rem;
            margin-right: 0.75rem;
            opacity: 0.4;

            &:hover {
                text-decoration: underline;
            }
        }

        &__item:nth-child(n + 4) {
            order: 1;
        }

        .active {
            text-decoration: underline;
        }


    }

    .category {
        margin-bottom: 2.5rem;

        &__title {
            font-family: Nib, sans-serif;
            margin-bottom: 0.75rem;
        }

    }

    .contact-title {
        margin-bottom: 0.25rem;
    }

    .contact-body {
      font-weight: lighter;
`;
