import React from 'react'
import './adventureTemplate.css'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h4>Designed For: {frontmatter.gameType}</h4>
        <h4>Reccommended Party Level: {frontmatter.partyLevel}</h4>
        <h4>Session Length: {frontmatter.sessionLength}</h4>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        gameType
        partyLevel
        sessionLength
      }
    }
  }
`
