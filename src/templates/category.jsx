import React from "react";
import { graphql } from "gatsby";

const Category = ({ data }) => {
  const {category} = data;
  return (
    <div>
      {category.frontmatter.title}
    </div>
  )
}

export default Category;

export const pageQuery = graphql`
query CategoryById($id: String!) {
  category: markdownRemark(id: {eq: $id}) {
    frontmatter {
      title
      slug
    }
  }
}
`
