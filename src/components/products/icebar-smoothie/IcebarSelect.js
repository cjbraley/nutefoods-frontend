import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const query = graphql`
    {
        allStrapiIcebar {
            edges {
                node {
                    name
                    color_hex
                }
            }
        }
    }
`;

const IcebarSelect = ({ activeIcebar }) => {
    const data = useStaticQuery(query).allStrapiIcebar.edges;
    return (
        <Container>
            {data.map(icebar => {
                const {
                    node: { name, color_hex },
                } = icebar;
                return (
                    <Link
                        key={`select-${name}`}
                        to={`/products/icebar-smoothie/${name.toLowerCase()}`}
                    >
                        <FunctionCircle
                            className={name === activeIcebar ? "active" : ""}
                            color={color_hex}
                        ></FunctionCircle>
                    </Link>
                );
            })}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-basis: 100%;
    flex: 1;
    justify-content: center;

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        justify-content: flex-start;
    }
`;

const FunctionCircle = styled.div`
    cursor: pointer;
    height: 1.125rem;
    width: 1.125rem;
    border-radius: 50%;
    opacity: 0.6;
    transition: 0.3s ease;
    margin: 0 1.25rem;
    background-color: ${props => props.color};

    &.active {
        opacity: 1;
        border: 1px solid ${props => props.theme.color.three};
        box-shadow: 0px 0px 0px 1px ${props => props.theme.color.primary};
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        height: 1.25rem;
        width: 1.25rem;
        margin: 0 0.75rem;
    }
`;

export default IcebarSelect;
