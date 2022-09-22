import React from "react";

const Seo = ({title, description, snippet}) => {
  return (
    <>
      <title>{title}</title>
      <meta
          name="description"
          content={description}
        />
      {snippet ? <script type="application/ld+json">{JSON.stringify(snippet)}</script> : null}
    </>
  )
}

export default Seo;