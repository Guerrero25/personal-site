import * as React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  AUTHOR,
  PROFESSION,
  LINKEDIN_ID,
  TWITTER_ID,
  GITHUB_ID,
} from "../../constants";

import Navbar from "../Navbar";
import DarkModeSwitch from "../UI/DarkModeSwitch";

import {
  Aside,
  Name,
  Profession,
  ProfileContainer,
  ProfileImageContainer,
  ProfileImage,
  SocialList,
  SocialItem,
  NavbarSection,
  DarkModeContainer,
} from "./styled";

import { navbarOptions } from "../App/config";

import profileImage from "../../assets/images/profile.jpg";
import { useAppContext } from "../App/context";

interface SidebarProps {}

function Sidebar({}: SidebarProps) {
  const { sidebarOpen, theme, setTheme } = useAppContext();

  return (
    <Aside open={sidebarOpen}>
      <ProfileContainer>
        <ProfileImageContainer>
          <ProfileImage alt={`${AUTHOR}-profile-image`} src={profileImage} />
        </ProfileImageContainer>
        <Name>{AUTHOR}</Name>
        <Profession>{PROFESSION}</Profession>
      </ProfileContainer>
      <NavbarSection>
        <Navbar options={navbarOptions} />
      </NavbarSection>
      <DarkModeContainer>
        <DarkModeSwitch
          checked={theme === "dark"}
          onChange={e => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
      </DarkModeContainer>
      <SocialList>
        <SocialItem>
          <a href={`https://www.linkedin.com/in/${LINKEDIN_ID}/`}>
            <FaLinkedin />
          </a>
        </SocialItem>
        <SocialItem>
          <a href={`https://twitter.com/${TWITTER_ID}`}>
            <FaTwitter />
          </a>
        </SocialItem>
        <SocialItem>
          <a href={`https://github.com/${GITHUB_ID}`}>
            <FaGithub />
          </a>
        </SocialItem>
      </SocialList>
    </Aside>
  );
}

export default Sidebar;
