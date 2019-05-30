import React from "react";
import styled from "styled-components";
import { colors, fonts } from './theme';

class ProjectCard extends React.Component {
  state = {
    isHovered: false
  };

  render() {
    const { isHovered } = this.state;
    const { bgImage, link, title, description } = this.props;

    return (
      <Card
        bgImage={bgImage}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <a href={link} style={{ textDecoration: "none" }}>
          <Title>{isHovered && title}</Title>
          <Description>{isHovered && description}</Description>
        </a>
      </Card>
    );
  }
}

const Card = styled.div`
  background-image: url(${props => props.bgImage || ""});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 450px;
  width: 100%;
  height: 250px;
  margin: 15px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${props => props.bgImage || ""});
  }
`;

const Title = styled.h3`
  margin: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colors.secondary};
  font-family: ${fonts.secondary};
`;

const Description = styled.p`
  color: ${colors.secondary};
  font-family: ${fonts.secondary};
`;

export default ProjectCard;
