import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Tags = ({ items, classes }) => {
    return (
        <Container className={`tag-container ${classes}`}>
            {items.map((item, i) => (
                <React.Fragment key={i}>
                    {i !== 0 && <div className="tag-divider">&#43;</div>}
                    <Link
                        to={`/products/icebar-smoothie/${item.name.toLowerCase()}`}
                        className="tag"
                    >
                        <div className="tag-item text--button">
                            <p>{item.name}</p>
                        </div>
                    </Link>
                </React.Fragment>
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    cursor: pointer;

    .tag-item {
        border: 1px solid ${props => props.theme.color.fourHover};
        color: ${props => props.theme.color.fourHover};
        padding: 0.25rem 0.5rem;
        border-radius: 2%;
    }

    .tag-divider {
        font-size: ${props => props.theme.font.size.m};
        margin: auto 0.5rem;
    }
`;

export default Tags;
