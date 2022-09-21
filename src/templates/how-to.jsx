import React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { Container } from '../components/Container'
import { Prose } from '../components/Prose'
import YouTubeEmbed from "../components/YouTubeEmbed";
import { formatDate, roundToMinutes } from '../utils/formatDateTime'
import { howToToSnippet } from '../utils/richSnippets'
import markdownToHtml from "../utils/markdownToHtml";

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const HowTo = ({ data }) => {
  const {howTo} = data;
  return (
    <>
      <Helmet>
        <title>{howTo.frontmatter.title}</title>
        <meta
          name="description"
          content={howTo.frontmatter.video.description}
        />
        <script type="application/ld+json">{howToToSnippet(howTo.frontmatter)}</script>
      </Helmet>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <Link
              to={`/${howTo.frontmatter.category}`}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </Link>
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {howTo.frontmatter.title}
                </h1>
                <time
                  dateTime={howTo.frontmatter.video.uploadDate}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(howTo.frontmatter.date)}</span>
                </time>
              </header>
              <Prose className="mt-8">
                <h2>TL;DR</h2>
                
                <p>Watch this {roundToMinutes(howTo.frontmatter.video.duration)} minute clip. Scroll down to see each step with code samples.</p>

                <YouTubeEmbed url={howTo.frontmatter.video.url} />

                {howTo.frontmatter.steps.map((s, i) => (
                  <div key={i}>
                    <h2>Step {i+1}: {s.name}</h2>
                    <p>{s.text}</p>
                    <div dangerouslySetInnerHTML={{__html: markdownToHtml(s.body)}} />
                  </div>
                ))}
              </Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
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
      excerpt
      date
      video {
        name
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