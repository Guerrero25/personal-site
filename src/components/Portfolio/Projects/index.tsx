import * as React from "react";

import { Container } from "./styled";
import Card from "../../UI/Card";

interface ProjectsProps {
  list: Project[];
}

function Projects({ list }: ProjectsProps) {
  return (
    <Container>
      {list.map(project => {
        const coverSrc =
          project.cover && !project.cover.includes("//")
            ? require(`../../../assets/images/projects/${project.cover}`)
            : project.cover;

        return (
          <Card
            tag={project.category}
            title={project.title}
            cover={coverSrc}
            coverAlt={`cover-${project.title}`}
          />
        );
      })}
    </Container>
  );
}

export default Projects;
