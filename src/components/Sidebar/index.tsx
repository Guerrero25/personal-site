import * as React from "react";
import { Link } from "gatsby";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  AUTHOR,
  PROFESSION,
  LINKEDIN_ID,
  TWITTER_ID,
  GITHUB_ID,
} from "../../constants";

import {
  Aside,
  Name,
  Profession,
  ProfileContainer,
  ProfileImageContainer,
  ProfileImage,
  SocialList,
  SocialItem,
} from "./styled";

import * as profileImage from "../../assets/images/profile.jpg";

interface SidebarProps {}

function Sidebar({}: SidebarProps) {
  return (
    <Aside>
      <ProfileContainer>
        <ProfileImageContainer>
          <ProfileImage src={profileImage} />
        </ProfileImageContainer>
        <Name>{AUTHOR}</Name>
        <Profession>{PROFESSION}</Profession>
      </ProfileContainer>
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
