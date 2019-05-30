import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

function ProjectList(props) {
  const { data } = props;

  return (
    <List >
      {data.allContentfulProject.edges.map(project => {
        return (
          <ProjectCard 
            bgImage={project.node.image.file.url} 
            title={project.node.title}
            description={project.node.description}
            link={project.node.url}
          />
        )
      })}
    </List>
  );
}

const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export default ProjectList;