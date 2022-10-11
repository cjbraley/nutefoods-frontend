import React from "react";
import styled from "styled-components";

const Ingredients = ({ data }) => {
    return <Container dangerouslySetInnerHTML={{ __html: data }}></Container>;
};

const Container = styled.div``;

export default Ingredients;
