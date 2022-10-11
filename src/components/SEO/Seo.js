import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title, description = "nutefoods" }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);

  return (
    <Helmet>
      <html lang="en" />
      <title>{`${title} | ${siteMetadata.title}`}</title>
      <meta
        name="description"
        content={description || siteMetadata.description}
      />
    </Helmet>
  );
};

export default Seo;
