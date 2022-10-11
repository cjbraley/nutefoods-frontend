import React, { useState } from "react";
import { useFormik, Formik } from "formik";
import styled from "styled-components";
import { navigate } from "gatsby";
import * as Yup from "yup";

import Button from "../general/Button";
import FormGroup from "./FormGroup";

const phoneRegExp =
    /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;

const Schema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("This field is required."),
    lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("This field is required."),
    email: Yup.string().email("Invalid email").required("This field is required."),
    addressLine1: Yup.string().required("This field is required.").min(5, "Too Short!"),
    contactNumber: Yup.string()
        .required("This field is required.")
        .matches(phoneRegExp, "Phone number is not valid"),
});

const ShippingForm = () => {
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            country: "Hong Kong",
            email: "",
            contactNumber: "",
            firstName: "",
            lastName: "",
            addressLine1: "",
            addressLine2: "",
            district: "Hong Kong Island",
            deliveryTime: "Tuesday afternoon 2:00-4:30pm",
        },
        validationSchema: Schema,
        onSubmit: values => {
            // set the shipping details in redux
            navigate("/checkout/payment");
        },
    });

    return (
        <>
            <Formik>
                {({ errors, touched }) => (
                    <Form onSubmit={formik.handleSubmit}>
                        <div className="content">
                            <FormGroup
                                id="country"
                                type="country"
                                label="Country"
                                value={formik.values.country}
                                errors={formik.errors.country}
                                handleChange={formik.handleChange}
                                hasSubmitted={hasSubmitted}
                                disabled
                            />
                            <FormGroup
                                id="email"
                                type="email"
                                label="Email"
                                handleChange={formik.handleChange}
                                value={formik.values.email}
                                errors={formik.errors.email}
                                hasSubmitted={hasSubmitted}
                            />
                            <FormGroup
                                label="Contact number"
                                id="contactNumber"
                                type="tel"
                                value={formik.values.contactNumber}
                                errors={formik.errors.contactNumber}
                                onChange={formik.handleChange}
                                handleChange={formik.handleChange}
                                hasSubmitted={hasSubmitted}
                            />
                            <FormGroup
                                label="First name"
                                id="firstName"
                                type="text"
                                value={formik.values.firstName}
                                errors={formik.errors.firstName}
                                onChange={formik.handleChange}
                                handleChange={formik.handleChange}
                                hasSubmitted={hasSubmitted}
                            />
                            <FormGroup
                                label="Last name"
                                id="lastName"
                                type="text"
                                value={formik.values.lastName}
                                errors={formik.errors.lastName}
                                onChange={formik.handleChange}
                                handleChange={formik.handleChange}
                                hasSubmitted={hasSubmitted}
                            />
                            <FormGroup
                                label="Address Line 1"
                                id="addressLine1"
                                type="text"
                                value={formik.values.addressLine1}
                                errors={formik.errors.addressLine1}
                                onChange={formik.handleChange}
                                handleChange={formik.handleChange}
                                hasSubmitted={hasSubmitted}
                            />
                            <FormGroup
                                label="Address Line 2"
                                id="addressLine2"
                                type="text"
                                value={formik.values.addressLine2}
                                errors={formik.errors.addressLine2}
                                onChange={formik.handleChange}
                                handleChange={formik.handleChange}
                                hasSubmitted={hasSubmitted}
                            />
                            <div className="form-input-group">
                                <label
                                    htmlFor="district"
                                    className={`form-input-label ${
                                        formik.values.district ? "form-input-label--shrink" : ""
                                    }`}
                                >
                                    District
                                </label>

                                <select
                                    className="form-input"
                                    id="district"
                                    name="district"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.district}
                                >
                                    <option value="Hong Kong Island">Hong Kong Island</option>
                                    <option value="Kowloon">Kowloon</option>
                                </select>
                            </div>
                            <div className="form-input-group">
                                <label
                                    htmlFor="deliveryTime"
                                    className={`form-input-label ${
                                        formik.values.deliveryTime ? "form-input-label--shrink" : ""
                                    }`}
                                >
                                    Delivery Time Preference
                                </label>
                                <select
                                    className="form-input"
                                    id="deliveryTime"
                                    name="deliveryTime"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.deliveryTime}
                                >
                                    <option value="Tuesday afternoon 2:00-4:30pm">
                                        Tuesday afternoon 2:00-4:30pm
                                    </option>
                                    <option value="Saturday morning 9:00-11:30am">
                                        Saturday morning 9:00-11:30am
                                    </option>
                                </select>
                            </div>
                            <Button
                                classes="btn"
                                color="four"
                                type="submit"
                                onClick={() => setHasSubmitted(true)}
                            >
                                Proceed to Payment
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

const Form = styled.form`
    margin-bottom: 6rem;

    ß .form-input-group .form-input:focus {
        outline: none;
    }
    .form-input-group {
        position: relative;
        margin-bottom: 0.125rem;

        .form-input {
            background: none;
            background-color: #d8c7ae;
            color: #383b23;
            font-size: 1rem;
            padding: 0.25rem 10px 0.25rem 5px;
            display: block;
            width: 100%;
            border-radius: 0;
            border: none;
            border-bottom: 1px solid #383b23;
            margin: 25px 0 0;
        }

        .form-input-label {
            color: #383b23;
            opacity: 0.6;
            font-size: 0.875rem;
            font-family: nib, sans-serif;
            font-weight: 400;
            position: absolute;
            pointer-events: none;
            left: 5px;
            top: 10px;
            transition: all 0.3s ease;

            &--shrink {
                top: -0.875rem;
                font-size: 0.75rem;
                color: #383b23;
                opacity: 1;
            }
        }

        .form-input-error {
            color: #96734a;
            font-weight: 700;
            margin-top: 0.4rem;
        }
    }

    .btn {
        z-index: 999;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 1.25rem 1rem;
        border-radius: 0;
    }

    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
        .btn {
            z-index: 1;
            position: initial;
            margin-top: ${props => props.theme.spacing.xl};
            padding: 1rem 1rem;
        }
    }
`;

export default ShippingForm;
