import PropTypes from "prop-types"
import React from "react"
import { Link } from 'gatsby'

import GitHubIcon from "./icons/GitHubIcon"
import LinkedInIcon from "./icons/LinkedInIcon"
import { FlexContainer } from './FlexContainer'
import { SocialMedia, HomeButton } from "./Button";
import { fonts } from "./theme";

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: 50,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <FlexContainer justify='flex-end'>
        <Link to="/" style={{ marginRight: 'auto', textDecoration: 'none' }}>
          <HomeButton style={{ fontSize: 20, fontFamily: fonts.main }}>BH</HomeButton>
        </Link>
        <SocialMedia href="https://www.linkedin.com/in/blake-hartman-486085a9/" target="_blank">
          <LinkedInIcon />
        </SocialMedia>
        <SocialMedia href="https://github.com/Decyphr" target="_blank">
          <GitHubIcon />
        </SocialMedia>
      </FlexContainer>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
