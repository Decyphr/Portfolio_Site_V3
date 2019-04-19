import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Paragraph } from "../components/typography";
import { fonts } from "../components/theme";
import ProjectGrid from "../components/ProjectGrid";
import { HeadingContainer } from "../components/FlexContainer";

const ProjectsPage = ({ data }) => (
  <Layout>
    <SEO title="Showcase" />
    <HeadingContainer>
      <Heading>Progress Makes Perfect</Heading>
      <Paragraph>
        <span style={{ fontFamily: fonts.main, fontSize: 20 }}>&quot;&nbsp;</span>
        If There is no struggle, there is no progress.{` `}
        <em style={{ fontSize: 14 }}>Frederick Douglass</em>
      </Paragraph>
    </HeadingContainer>
    <ProjectGrid data={data}/>
    {/* TODO projects grid */}
  </Layout>
)

export const query = graphql`
  query data {
    allContentfulProject {
      edges {
        node {
          title
          description
          image {
            file {
              url
              fileName
            }
          }
          url
        }
      }
    }
  }
`

export default ProjectsPage
