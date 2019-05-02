import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Paragraph } from "../components/typography";
import { Button } from "../components/Button";

const Success = () => (
  <Layout>
    <SEO title="Form Success" />
    <Heading>Success!</Heading>
    <Paragraph>Thanks for reaching out! I will get back to you soon <span aria-label="Nice" role="img">👌</span></Paragraph>
    <Link to="/">
      <Button>Head Back</Button>
    </Link>
  </Layout>
)

export default Success
