import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({title, description, snippet}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
          name="description"
          content={description}
        />
      {snippet ? <script type="application/ld+json">{JSON.stringify(snippet)}</script> : null}
    </Helmet>
  )
}

export default SEO;