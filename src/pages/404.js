import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Paragraph } from "../components/typography";
import { Button } from "../components/Button";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <Heading>Wrong Page!</Heading>
    <Paragraph>I haven&apos;t made this page yet!</Paragraph>
    <Link to="/">
      <Button>Head Back</Button>
    </Link>
  </Layout>
)

export default NotFoundPage
