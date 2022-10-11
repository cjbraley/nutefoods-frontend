import React from "react";
import styled from "styled-components";

import CircleIcon from "../../../../assets/icons/circle.svg";
import RingFillLeftIcon from "../../../../assets/icons/ring-fill-left.svg";
import RingFillRightIcon from "../../../../assets/icons/ring-fill-right.svg";
import DoubleCircleIcon from "../../../../assets/icons/double-circle.svg";
import SemiCircleLeftIcon from "../../../../assets/icons/semi-circle-left.svg";
import SemiCircleRightIcon from "../../../../assets/icons/semi-circle-right.svg";
import RingIcon from "../../../../assets/icons/ring.svg";

const ICONS = {
    CircleIcon: <CircleIcon className="icon" />,
    RingFillLeftIcon: <RingFillLeftIcon className="icon" />,
    RingFillRightIcon: <RingFillRightIcon className="icon" />,
    DoubleCircleIcon: <DoubleCircleIcon className="icon" />,
    SemiCircleLeftIcon: <SemiCircleLeftIcon className="icon" />,
    SemiCircleRightIcon: <SemiCircleRightIcon className="icon" />,
    RingIcon: <RingIcon className="icon" />,
};

const NutritionItem = ({
    nutrient: { name, servingAmount, dailyValue, servingIcon, subItems = [] },
}) => {
    return (
        <Container>
            <div className="table-row">
                <div className="table-item table-item--title">{name}</div>
                <div className="table-item table-item--serving">{servingAmount}</div>
                <div className="table-item table-item--serving">{ICONS[servingIcon]}</div>
                <div className="table-item table-item--daily">{dailyValue}</div>
            </div>
            {subItems.map((item, i) => (
                <div key={i} className="table-row table-row--subrow">
                    <div className="table-item table-item--title">{item.name}</div>
                    <div className="table-item table-item--serving">{item.servingAmount}</div>
                    <div className="table-item table-item--serving">{item.servingIcon}</div>
                    <div className="table-item table-item--daily">{item.dailyValue}</div>
                </div>
            ))}
        </Container>
    );
};

export default NutritionItem;

const Container = styled.div`
    .icon {
        height: 0.75rem;
        width: 1.25rem;
        stroke: none;
        fill: #383b23;
    }

    .table-row {
        width: 100%;
        display: flex;
        flex: auto 5rem 5rem;
        border-bottom: 1px solid rgba(100, 100, 100, 0.4);
        margin-bottom: 0.125rem;
    }

    .table-row--subrow {
        border-bottom: none;

        .table-item__title {
            padding-left: 2rem;
        }
    }

    .table-item {
        font-size: 1rem;
    }

    .table-item--title {
        flex-basis: 50%;
        text-align: left;
    }

    .table-item--serving {
        flex-basis: 25%;
        text-align: right;
    }

    .table-item--daily {
        flex-basis: 25%;
        text-align: right;
    }
`;
