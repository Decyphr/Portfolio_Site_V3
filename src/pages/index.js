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
      👋 Hey! I'm a front-end web developer and graphic designer. 
      I create After graduating from college with a degree in Marketing, 
      I found my passion for digital design, development, creativity, and music 
      through an addiction to tutorials. I love that we live in this golden age of 
      information that puts us in control of our personal and professional betterment!
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
