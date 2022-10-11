import React from "react";
import styled from "styled-components";

import NutritionItem from "./NutritionItem";

const Nutrition = ({ data }) => {
    return (
        <Container>
            <NutritionItem nutrient={{ name: "Amount per icebar", dailyValue: "%DV*" }} />
            {data.map((item, i) => (
                <NutritionItem key={i} nutrient={item} />
            ))}
            <div className="nutrition-footer">
                *The % daily value (DV) are based on a 2,000 calorie diet. Your Daily Values may be
                higher or lower depending on your caloric needs.
            </div>
        </Container>
    );
};

const Container = styled.div`
    border-top: 1px solid $colorPrimary;
    border-top: none;

    .nutrition-footer {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }
`;

export default Nutrition;
