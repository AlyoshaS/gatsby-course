import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const BlogList = props => {
  const post = props.data.allMarkdownRemark.edges
  
  return (
    <Layout>
      <SEO title="Home" />
      {post.map(({
        node: {
          frontmatter: { background, category, date, description, title },
          timeToRead,
          fields: { slug },
        },
      }) => (
        <PostItem
          slug={slug}
          background={background}
          category={category}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            background
            category
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            description
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogList