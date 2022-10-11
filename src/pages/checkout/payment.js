import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../../components/ui/Layout";
import Seo from "../../components/SEO/Seo";

const Payment = () => {
    return (
        <Layout hideCart={true}>
            <Seo title="Payment" />
            <Wrapper className="page">
                <div className="content">
                    <h2>We're sorry, we were unable to complete your order...</h2>
                    <p>
                        This version of the website is for demo purposes only. Please navigate back
                        to
                        <Link to="/"> the store</Link>
                    </p>
                </div>
            </Wrapper>
        </Layout>
    );
};

const Wrapper = styled.div`
    padding-top: ${props => props.theme.spacing.l};

    h2 {
        margin-bottom: ${props => props.theme.spacing.m};
    }
`;

export default Payment;
