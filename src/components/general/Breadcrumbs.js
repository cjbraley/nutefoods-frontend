import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Breadcrumbs = ({ data = [], absolute = false, currentPath }) => {
    return (
        <BreadcrumbContainer absolute={absolute}>
            {data.map((breadcrumb, i) =>
                !breadcrumb.disabled ? (
                    <Link
                        key={i}
                        to={breadcrumb.path}
                        className={`breadcrumb ${breadcrumb.path === currentPath ? "active" : ""}`}
                    >
                        {breadcrumb.name}
                    </Link>
                ) : (
                    <div key={i} className="breadcrumb">
                        {breadcrumb.name}
                    </div>
                )
            )}
        </BreadcrumbContainer>
    );
};

const BreadcrumbContainer = styled.div`
    display: flex;
    align-self: flex-start;
    padding: 0 ${props => props.theme.spacing.m};
    padding-top: ${props => props.theme.spacing.m};
    margin-bottom: ${props => props.theme.spacing.m};
    position: ${props => (props.absolute ? "absolute" : "initial")};
    z-index: 1;

    a {
        text-decoration: none;
    }

    .breadcrumb {
        cursor: pointer;
        font-family: Nib, sans-serif;
        opacity: 0.4;
        font-size: ${props => props.theme.font.size.s};
        margin-right: ${props => props.theme.spacing.s};
        line-height: ${props => props.theme.font.size.s};

        &:hover {
            border-bottom: 1px solid;
        }
    }

    .active {
        opacity: 1;
        cursor: default;
        border-bottom: 1px solid;
    }
`;

export default Breadcrumbs;
