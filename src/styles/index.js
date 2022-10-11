import { createGlobalStyle } from "styled-components";
// import reset from 'styled-reset'

const Global = createGlobalStyle`


    // normalise
    html {
        height: 100%;
        scroll-behavior: smooth;
        -webkit-tap-highlight-color: transparent;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }

    a {
        cursor: pointer;
        color: inherit;
        text-decoration: underline;
    }


    ul {
        list-style: disc;
        padding-left: 1.25rem;
    }

    button {
        background-color: transparent;
        border-width: 0;
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        line-height: inherit;
        padding: 0;
        margin: 0;
        color: inherit;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: NHaasGrotesk, sans-serif;
        /* -webkit-font-smoothing: antialiased; */
        -moz-osx-font-smoothing: grayscale;
        color: ${props => props.theme.color.primary};
    }

    .preventScroll {
        overflow: hidden;
    }

    // layout

    .container {
        width: 1144px;
        height: fit-content;
        margin-left: auto;
        margin-right: auto;
    }

    // fonts
      
    h1 {
        font-family: NHaasGrotesk, sans-serif;
        font-style: normal;
        font-weight: inherit;
        font-size: ${props => props.theme.font.size.xxxl};
    }

    h2 {
        font-family: NHaasGrotesk, sans-serif;
        font-style: normal;
        font-weight: inherit;
        font-size: ${props => props.theme.font.size.xxl};
    }

    h3 {
        font-family: NHaasGrotesk, sans-serif;
        font-style: normal;
        font-weight: inherit;
        font-size: ${props => props.theme.font.size.xl};
    }

    h4{
        font-family: NHaasGrotesk, sans-serif;
        font-style: normal;
        font-weight: inherit;
        font-size: ${props => props.theme.font.size.l};
    }

    h5{
        font-family: NHaasGrotesk, sans-serif;
        font-style: normal;
        font-weight: inherit;
        font-size: ${props => props.theme.font.size.m};
    }

    h6{
        font-family: NHaasGrotesk, sans-serif;
        font-style: normal;
        font-weight: inherit;
        font-size: ${props => props.theme.font.size.s};
    }

    
    p {
        font-family: NHaasGrotesk, sans-serif;
        font-style: normal;
        font-weight: lighter;
        font-size: 1.0625rem;
        line-height: 130%;
    }

    .text--large{
        font-family: NHaasGrotesk, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 1.375rem;
        line-height: 140%;
    } 

    .text--small {
        font-family: NHaasGrotesk, sans-serif;
        font-style: normal;
        font-weight: lighter;
        font-size: 1rem;
        line-height: 130%;
    }


    .text--footnote {
        font-family: NHaasGrotesk, sans-serif;
        font-style: normal;
        font-weight: lighter;
        font-size: 0.75rem;
        line-height: 130%;
    }

    .text--button {
        font-family: 'Nib', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
    }


    .text--alt {
        color: ${props => props.theme.color.secondary};
    }

    .text--regular {
        font-weight: normal;
    }

    // tablet fonts

    @media (min-width: ${props => props.theme.breakpoint.tablet}) {



    }


    // general

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
    //   border: none;
    -webkit-text-fill-color: ${props => props.theme.color.primary};
    color: $colorPrimary!important;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
    }

    input:focus{
        outline: none;
    }

    input:disabled, textarea:disabled, input:disabled::placeholder, textarea:disabled::placeholder {
        -webkit-text-fill-color: ${props => props.theme.color.primary} !important; 
        color: ${props => props.theme.color.primary} !important; 
        opacity: 1; 
  }

  .page {
    width: 100%;
    background-color: ${props => props.theme.color.secondary}; 
  }

  .page--alt {
    background-color: ${props => props.theme.color.primary}; 
  }

    .content {
        flex-grow: 1; 
        padding-left: ${props => props.theme.position.contentPadding};
        padding-right:  ${props => props.theme.position.contentPadding};
        padding: 0 ${props => props.theme.position.contentPadding} 0 ${props =>
    props.theme.position.contentPadding};

    }

    .content--alt{
        background-color: ${props => props.theme.color.primary}
    }

    .divider {
        height: 1px;
        width: 100%;
        background-color: ${props => props.theme.color.primary};
    }

    .header-image {
        display: block;
        min-height: 30rem;
        max-width: 100%;
        object-fit: cover;
        margin-left: auto;
        margin-right: auto;
        /* margin-bottom: ${props => props.theme.spacing.l}; */
    }

    .hide--mobile{
        display: none;
    }

    @media (min-width: ${props => props.theme.breakpoint.tablet}) {

        html {
            font-size: 18px;
        }

        .page {
            height: auto;
            width: 90%;
            max-width: 42rem;
            margin-left: auto;
            margin-right: auto;
        }

        .header-image {
            width: 100%;
            max-width: 42rem;

            .gatsby-image-wrapper{
                width: 100%;
            }

            img {
                max-height: 42rem;
                max-width: 42rem;
            }

        }
        
    }

    @media (min-width: ${props => props.theme.breakpoint.desktop}) {

        p {
            font-size: 1rem;
        }

        .hide--mobile {
            display: block;
        }

        .hide--desktop {
            display: none;
        }

        .show--desktop {
            display: block
        }

        .page {
            width: 90%;
            max-width: none;
        }

        .content {
            max-width: 64rem;
            margin-left:auto;
            margin-right:auto;
        }
    }

    


  
`;

export default Global;
