const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {ne: null}}}) {
          nodes {
            id
            fileAbsolutePath
            frontmatter {
              templateKey
            }
          }
        }
      }    
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const context = {
        id: post.id,
      };
      createPage({
        path: `/${post.fileAbsolutePath.match(/src\/pages\/(.+)\.md/)[1]}/`,
        component: path.resolve(
          `./src/templates/${String(post.frontmatter.templateKey)}.jsx`
        ),
        context,
      })
    })
  }
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
