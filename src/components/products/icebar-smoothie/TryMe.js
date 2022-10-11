import React from "react";

const TryMe = ({ data }) => {
    return (
        <ul>
            {data.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
};

export default TryMe;
