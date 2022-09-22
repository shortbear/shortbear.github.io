import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import { Card } from "../components/Card";
import { SimpleLayout } from "../components/SimpleLayout";
import { formatDate } from '../utils/formatDate';

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={article.fields.slug}>
          {article.frontmatter.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.frontmatter.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.frontmatter.date)}
        </Card.Eyebrow>
        <Card.Description>{article.frontmatter.excerpt}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.frontmatter.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.frontmatter.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const Head = ({ data }) => {
  const {category} = data;
  return (
    <Seo 
      title={`${category.frontmatter.title} Tips, Tricks and Articles`} 
      description={category.frontmatter.excerpt} 
    />
  )
}

const Category = ({ data }) => {
  const {category, articles} = data;
  return (
    <>
      <SimpleLayout
        title={category.frontmatter.title}
        intro={category.frontmatter.excerpt}
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.nodes.map((article) => (
              <Article key={article.fields.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export default Category;

export const pageQuery = graphql`
query CategoryWithPosts($slug: String!) {
  category: markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      slug
      title
      excerpt
    }
  }
  articles: allMarkdownRemark(
    filter: {frontmatter: {category: {regex: $slug}}}
    sort: {order: DESC, fields: frontmatter___date}
  ) {
    nodes {
      frontmatter {
        title
        excerpt
        date
      }
      fields {
        slug
      }
    }
  }
}
`
