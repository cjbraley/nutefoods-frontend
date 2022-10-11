import React, { useState } from "react";
import styled from "styled-components";

import PlusIcon from "../../assets/icons/plus.svg";
import MinusIcon from "../../assets/icons/minus.svg";

const DropdownText = ({
    title,
    content,
    classes,
    noPadding = false,
    children,
    $alt = false,
    defaultExpanded = false,
}) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);
    return (
        <Container className={classes} $alt={$alt} noPadding={noPadding}>
            <div
                className="dropdown-header"
                onClick={() => setIsExpanded(!isExpanded)}
                onKeyDown={() => setIsExpanded(!isExpanded)}
                role="button"
                tabIndex="0"
            >
                <div className="dropdown-title">{title}</div>
                {isExpanded ? (
                    <MinusIcon onClick={() => setIsExpanded(false)} className="dropdown-icon" />
                ) : (
                    <PlusIcon onClick={() => setIsExpanded(true)} className="dropdown-icon" />
                )}
            </div>
            {isExpanded && <div className="dropdown-children">{children}</div>}
        </Container>
    );
};

const Container = styled.div`
    margin-bottom: ${props => props.theme.spacing.m};

    .dropdown-header {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 0.25rem;
        border-bottom: 1px solid ${props => props.theme.color.primary};
    }

    .dropdown-title {
        flex: 1;
        font-size: ${props => (props.$alt ? props.theme.font.size.s : props.theme.font.size.l)};
        font-family: ${props => (props.$alt ? "Nib, sans-serif" : "")};
    }

    &__expand {
        margin-right: 0.35rem;
        cursor: pointer;
    }

    .dropdown-icon {
        height: 0.75rem;
        width: 0.75rem;
        fill: ${props => (props.$alt ? props.theme.color.secondary : props.theme.color.primary)};
        stroke: ${props => (props.$alt ? props.theme.color.secondary : props.theme.color.primary)};
        margin-right: 0.35rem;
    }

    .dropdown-children {
        padding: ${props => (props.noPadding ? "0.5rem 0 0 0" : "1rem 0.75rem")};
        background-color: ${props =>
            props.$alt ? props.theme.color.primary : props.theme.color.three};
    }
`;

export default DropdownText;
