import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const MenuSubItem = ({ to, text, isNew }) => {
    return (
        <Wrapper>
            <Link to={to}>
                <h3>
                    <span>{text}</span>
                    {isNew && <sup class="menu-super"> (NEW)</sup>}
                </h3>
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    cursor: pointer;
    margin-bottom: 0.25rem;
    margin-left: 0.75rem;

    &:hover {
        opacity: 0.75;
    }

    a {
        text-decoration: none;
    }

    h3 {
        font-weight: lighter;
        margin-bottom: 0.25rem;
    }

    .menu-super {
        vertical-align: top;
        font-size: 0.675rem;
        color: #948f71;
    }
`;

export default MenuSubItem;
