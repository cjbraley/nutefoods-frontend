import React from "react";
import styled from "styled-components";

import ArrowIcon from "../../assets/icons/arrow-medium.svg";

const Cover = () => {
    return (
        <>
            <Container>
                <div className="cover-content">
                    <h1 className="header">It’s nüte to meet yoü</h1>
                    <h3 className="subtitle">
                        Made by and for Earth, this is everyone's <br /> space to learn, share and
                        eat.
                    </h3>
                    <p>
                        We are still at work, like bees in our hive, striving to create an <br />
                        environment that empowers yoü to nourish yourself through natüre;
                        <br />
                        but for now,
                    </p>
                </div>
                <div className="cover-action">
                    <h6 className="header">we have something cool for yoü.</h6>
                    <div className="highlight">Savour Beyond</div>
                    <ArrowIcon className="icon" />
                    <div className="divider" />
                </div>
            </Container>
            <CoverMargin />
        </>
    );
};

const Container = styled.div`
    height: calc(100vh - 3rem);
    min-height: 28rem;
    width: 100%;
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.position.contentPadding};
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    transition: all 0.75s;
    z-index: -1;
    background-color: #383b23;
    color: #d8c7ae;

    .cover-content {
        flex: 1;

        .header {
            margin-bottom: ${props => props.theme.spacing.l};
        }

        .subtitle {
            margin-bottom: ${props => props.theme.spacing.m};
        }
    }

    .cover-action {
        margin-bottom: 6rem;

        .header {
            font-weight: bold;
            margin-bottom: ${props => props.theme.spacing.m};
            text-align: center;
        }

        .highlight {
            font-family: Nib, sans-serif;
            margin-bottom: ${props => props.theme.spacing.xl};
            text-align: center;
        }

        .icon {
            height: auto;
            width: 1.75rem;
            stroke: ${props => props.theme.color.secondary};
            fill: none;
            display: block;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            font-size: 1.25rem;
            transform: translateY(-0.6rem) rotate(90deg);
        }

        .divider {
            border-top: 1px solid ${props => props.theme.color.secondary};
        }
    }

    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
        .cover-action {
            margin-bottom: ${props => props.theme.spacing.xl};
        }
    }
`;

const CoverMargin = styled.div`
    height: calc(100vh - 3.25rem);
    min-height: 28rem;
    background: none;
`;

export default Cover;
