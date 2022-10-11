import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import EmailIcon from "../../assets/icons/email.svg";
import WhatsappIcon from "../../assets/icons/whatsapp.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";

import Logo from "../icons/Logo";

const Footer = ({ hideFooterMobile = false }) => {
    return (
        <Wrapper className={`${hideFooterMobile ? "hide--mobile" : ""}`}>
            <div className="footer__container">
                <Link to="/">
                    <Logo $alt={true} />
                </Link>
                <div className="footer__container-icons">
                    <a href="https://wa.me/85260362938" target="_blank" rel="noreferrer">
                        <WhatsappIcon className="footer-icon" />
                    </a>
                    <a href="https://www.instagram.com/nutefoods" target="_blank" rel="noreferrer">
                        <InstagramIcon className="footer-icon" />
                    </a>
                    <a href="mailto:hello@nutefoods.com">
                        <EmailIcon className="footer-icon" />
                    </a>
                </div>
            </div>
            <div>
                <div className="footer__links">
                    <Link to="/terms-of-service" className="footer-item hover--text">
                        <div className="text--small text--regular">Terms of Service</div>
                    </Link>

                    <Link to="/privacy-policy" className="footer-item hover--text">
                        <div className="text--small text--regular">Privacy Policy</div>
                    </Link>
                </div>
                <div className="footer-item text--small text--regular">
                    © {new Date().getFullYear()} nüte limited
                </div>
            </div>
        </Wrapper>
    );
};

export default Footer;

const Wrapper = styled.footer`
    width: 100%;
    height: ${props => props.theme.position.footerHeight};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${props => (props.altStyle ? props.theme.color.primary : props.theme.color.secondary)};
    background-color: ${props =>
        props.altStyle ? props.theme.color.secondary : props.theme.color.primary};
    padding: 0.75rem 1rem 1rem 1rem;
    z-index: 2;

    &.hide--mobile {
        display: none;
    }

    .footer--altStyle {
        color: ${props => props.theme.color.secondary};
    }

    .footer__container {
        display: flex;
        justify-content: space-between;

        &-icons {
            display: flex;
        }
    }

    .logo {
        height: 1.25rem;
    }

    .footer-icon {
        cursor: pointer;
        stroke: none;
        fill: ${props =>
            props.altStyle ? props.theme.color.primary : props.theme.color.secondary};
        height: 1.25rem;
        width: auto;
        margin-left: 0.75rem;

        &:hover {
            fill: ${props =>
                props.altStyle ? props.theme.color.primaryHover : props.theme.color.secondaryHover};
        }
    }

    .footer__links {
        display: flex;
        margin-bottom: ${props => props.theme.spacing.xs};

        .footer-item {
            margin-right: 0.75rem;

            &:hover {
                text-decoration: underline;
            }
        }

        a {
            text-decoration: none;
        }
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        &.hide--mobile {
            display: flex;
        }
    }
`;
