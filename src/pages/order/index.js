import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../../components/ui/Layout";
import Seo from "../../components/SEO/Seo";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import ArrowIcon from "../../assets/icons/arrow-short.svg";

const breadcrumbData = [{ name: "Order", path: "/order", disabled: false }];

const Order = props => (
    <Layout>
        <Seo title="order" />
        <Wrapper className="page">
            <Breadcrumbs data={breadcrumbData} currentPath={props.location.pathname} />
            <div className="content">
                <h6 className="order-item__title">Icebar Smoothie</h6>
                <div className="order-item">
                    <Link to="/order/icebar-smoothie/starter-set">
                        <h1 className="order-item__subtitle">Starter sets</h1>
                        <div className="flex">
                            <h6 className="text">Nourishment should be easy for yoü.</h6>
                            <ArrowIcon className="icon" />
                        </div>
                    </Link>
                </div>
                <div className="order-item">
                    <Link to="/order/icebar-smoothie/create-your-set">
                        <h1 className="order-item__subtitle">Create Your Set</h1>
                        <div className="flex">
                            <h6 className="text">Your body, your choice. Yoü know best.</h6>
                            <ArrowIcon className="icon" />
                        </div>
                    </Link>
                </div>
            </div>
        </Wrapper>
    </Layout>
);

const Wrapper = styled.div`
    a {
        text-decoration: none;
    }

    .order-item {
        margin-bottom: 2rem;

        &__title {
            font-family: Nib, sans-serif;
            margin-bottom: ${props => props.theme.spacing.xs};
        }

        &__subtitle {
            margin-bottom: ${props => props.theme.spacing.xs};
        }
    }

    .flex {
        display: flex;
        justify-content: space-between;
        padding-bottom: ${props => props.theme.spacing.xs};
        border-bottom: 1px solid ${props => props.theme.color.primary};
        margin-bottom: ${props => props.theme.spacing.l};
    }

    .icon {
        height: 0.75rem;
        width: 1.25rem;
        fill: none;
        stroke: ${props => props.theme.color.primary};
    }
`;

export default Order;
