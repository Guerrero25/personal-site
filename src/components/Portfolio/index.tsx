import * as React from "react";
import { useState, useMemo } from "react";

import Title from "../UI/Title";
import Tabs from "../UI/Tabs";

import { Container } from "./styled";
import Projects from "./Projects";

interface PortfolioProps {
  categories: string[];
  projects: Project[];
}

function Portfolio({ categories, projects }: PortfolioProps) {
  const [activeKey, setActiveKey] = useState("all");
  const filteredProjects = useMemo(() => {
    return projects.filter(project =>
      activeKey === "all" ? true : project.category === activeKey
    );
  }, [activeKey]);
  const categoriesTabs = categories.map(category => ({
    key: category,
    label: category,
  }));

  return (
    <Container>
      <Title>Portfolio</Title>
      <Tabs
        activeTab={activeKey}
        tabs={[{ key: "all", label: "All" }, ...categoriesTabs]}
        onChange={setActiveKey}
      />
      <Projects list={filteredProjects} />
    </Container>
  );
}

export default Portfolio;
