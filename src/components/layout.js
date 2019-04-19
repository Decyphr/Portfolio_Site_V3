import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

import { Heading, Paragraph } from './typography'
import "./layout.css"
import { colors } from "./theme";
import ContactForm from "./ContactForm";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 980,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <footer style={{ position: `relative`, bottom: 0, left: 0, padding: 35, paddingBottom: 0, background: colors.main, width: `100%` }}>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 680,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <Heading
              align='center'
              color={colors.secondary}
              size='1.5em'
              leading='150%'
            >
              Have a Project in Mind?
            </Heading>
            <Paragraph color={colors.secondary} align='center'>Let&apos;s Talk.</Paragraph>
            <ContactForm />
            <Paragraph color={colors.secondary} align='center' style={{ marginTop: 65 }}>
              © {new Date().getFullYear()} | Blake Hartman
            </Paragraph>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
