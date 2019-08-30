import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="red"
      category="Misc"
      date="30 de Julho de 2019"
      timeToRead="5"
      title="Eu sou um título loremzero"
      description="Algumas razões pra você lorem blablabla e você pode fazer blablabla. Há de ser tudo da lei."
    />
  </Layout>
)

export default IndexPage
