import * as React from "react";

import { Container, Tab } from "./styled";

type TabType = {
  key: string;
  label: string;
};

interface TabsProps {
  tabs: TabType[];
  activeTab?: string;
  onChange?: (key: string) => void;
}

function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <Container>
      {tabs.map((tab, index) => (
        <Tab
          key={`${tab.key}-${index}`}
          role="button"
          active={activeTab ? activeTab === tab.key : true}
          onClick={() => onChange && onChange(tab.key)}
        >
          {tab.label}
        </Tab>
      ))}
    </Container>
  );
}

export default Tabs;
