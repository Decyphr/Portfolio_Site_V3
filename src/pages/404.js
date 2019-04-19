import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Paragraph } from "../components/typography";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading>Hot Damn!</Heading>
    <Paragraph>I haven&apos;t made this page yet!</Paragraph>
  </Layout>
)

export default NotFoundPage
