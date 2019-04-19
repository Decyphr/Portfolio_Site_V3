import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Paragraph } from "../components/typography"
import { Button } from "../components/Button"
import { FlexContainer, HeadingContainer } from "../components/FlexContainer"
import IconPreview from '../components/IconPreview'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeadingContainer>
      <Heading>Blake Hartman</Heading>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five Centuries.
      </Paragraph>
      <FlexContainer>
        <Link to="/projects">
          <Button>View Projects</Button>
        </Link>
        <Link to="/page-2/">
          <Button>View Resume</Button>
        </Link>
      </FlexContainer>
      <IconPreview />
    </HeadingContainer>
  </Layout>
)

export default IndexPage
