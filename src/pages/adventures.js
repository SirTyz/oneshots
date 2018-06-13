import React from 'react'
import Link from 'gatsby-link'

import './adventure.css'

const Adventures = props => {
  const pages = props.data.allMarkdownRemark.edges

  console.log(props.data.allMarkdownRemark.edges)
  return (
    <div>
      <h1>Adventures</h1>
      <div className="adventureList">
        {pages.map(page => {
          return (
            <div className="adventure">
              <Link to={page.node.frontmatter.path}>
                <h2>{page.node.frontmatter.title}</h2>
              </Link>
              <div className="adventureTags">
                <div>{page.node.frontmatter.gameType}</div>
                <div>Party Level: {page.node.frontmatter.partyLevel}</div>
                <div>Session Length: {page.node.frontmatter.sessionLength}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Adventures

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___partyLevel] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            gameType
            partyLevel
            sessionLength
          }
        }
      }
    }
  }
`
