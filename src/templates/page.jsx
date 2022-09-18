import React from "react";
import { graphql } from "gatsby";

const Page = ({ data }) => {
  const {page} = data;
  return (
    <div>
      {page.frontmatter.title}
      <div dangerouslySetInnerHTML={{__html: page.html}} />
    </div>
  )
}

export default Page;

export const pageQuery = graphql`
query PageById($id: String!) {
  page: markdownRemark(id: {eq: $id}) {
    frontmatter {
      title
    }
    html
  }
}
`
