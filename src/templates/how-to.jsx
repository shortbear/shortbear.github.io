import React from "react";
import { graphql } from "gatsby";

const HowTo = ({ data }) => {
  return (
    <div>How to</div>
  )
}

export default HowTo;

export const pageQuery = graphql`
query HowToById($id: String!) {
  howTo: markdownRemark(id: {eq: $id}, frontmatter: {templateKey: {eq: "how-to"}}) {
    id
    frontmatter {
      title
      category
      image
      video {
        name
        description
        uploadDate
        url
        thumbnailUrl
        duration
      }
      steps {
        name
        text
        image
        clip {
          startOffset
          endOffset
        }
        body
      }
    }
  }
}
`