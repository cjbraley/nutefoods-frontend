import React from "react";

const FormGroup = ({ value, label, errors, hasSubmitted, handleChange, id, type, disabled }) => {
    return (
        <div className="form-input-group">
            <label
                htmlFor={id}
                className={`form-input-label ${value ? "form-input-label--shrink" : ""}`}
            >
                {label}
            </label>
            <input
                className="form-input"
                id={id}
                name={id}
                type={type}
                disabled={disabled}
                onChange={handleChange}
                value={value}
            />
            {hasSubmitted && errors ? <div className="form-input-error">{errors}</div> : null}
        </div>
    );
};

export default FormGroup;
