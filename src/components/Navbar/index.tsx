import * as React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

import { NavbarContainer, OptionList, OptionItem } from "./styled";

interface NavbarProps {
  options: {
    label: string;
    path: string;
  }[];
}

function Navbar({ options }: NavbarProps) {
  const location = useLocation();

  return (
    <NavbarContainer>
      <OptionList>
        {options.map(option => (
          <OptionItem
            active={
              location.pathname === "/"
                ? location.pathname === option.path
                : location.pathname.startsWith(option.path)
            }
          >
            <Link to={option.path}>{option.label}</Link>
          </OptionItem>
        ))}
      </OptionList>
    </NavbarContainer>
  );
}

export default Navbar;
