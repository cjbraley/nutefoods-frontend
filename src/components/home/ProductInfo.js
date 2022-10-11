import React from "react";
import styled from "styled-components";

const ProductInfo = () => {
    return (
        <Wrapper>
            <div className="section">
                <h3 className="header">Storage</h3>
                <div className="text--small">
                    In the freezer. For optimal freshness, please move the icebar smoothies into an
                    airtight container upon receipt.
                </div>
            </div>
            <div className="section section--right">
                <h3 className="header">Packaging Recycling</h3>
                <div className="text--small margin-btm">
                    Our icebar smoothie packaging contains <strong>zero plastic</strong>; and with
                    your help, they can be <strong>100% circular</strong>.
                </div>
                <div className="text--small sub-header">Components:</div>
                <ul className="margin-btm">
                    <li>
                        Bar wrapping - FSC-certified unbleached total chlorine free (TCF)
                        greaseproof paper from{" "}
                        <a
                            href="https://buyifyoucare.com/products/parchment-baking-paper"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            IfYouCare
                        </a>
                        .
                    </li>
                    <li>Individual box - Pure cardboard paper.</li>
                    <li>
                        Package wrapping - FSC-certified, soy-based inks, acid-free paper from{" "}
                        <a
                            href="https://www.noissue.co/custom-packaging/custom-printed-tissue-paper"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            noissue
                        </a>
                        .
                    </li>
                </ul>
                <div className="text--small sub-header">Treatment:</div>
                <ul>
                    <li>
                        Bar and package wrapping - Please return to us clean on your next delivery -
                        we will recycle them.
                    </li>
                    <li>Individual box - Recycle in the paper section.</li>
                </ul>
            </div>
        </Wrapper>
    );
};

export default ProductInfo;

const Wrapper = styled.div`
    padding: 0 ${props => props.theme.spacing.m};
    /* margin-bottom: ${props => props.theme.spacing.xxl}; */

    .section {
        margin-bottom: ${props => props.theme.spacing.m};
    }
    .header {
        margin-bottom: ${props => props.theme.spacing.s};
    }

    .sub-header {
        font-weight: bold;
        margin-bottom: ${props => props.theme.spacing.xs};
    }

    .margin-btm {
        margin-bottom: ${props => props.theme.spacing.m};
    }

    li {
        margin-bottom: ${props => props.theme.spacing.xs};
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        display: flex;
        justify-content: space-between;

        .section {
            margin-bottom: 0;
            padding-top: ${props => props.theme.spacing.xxl};
            padding-bottom: ${props => props.theme.spacing.xxl};
            width: 50%;
            border-top: none;
            max-width: 32rem;
        }

        .section:first-of-type {
            border-right: 1px solid ${props => props.theme.color.primary};
            padding-right: ${props => props.theme.spacing.xxl};
            margin-left: auto;
        }

        .section--right {
            border-left: none;
            padding-left: ${props => props.theme.spacing.xxl};
            margin-right: auto;
        }

        .header {
            text-align: left;
            margin-bottom: ${props => props.theme.spacing.l};
        }
    }
`;
