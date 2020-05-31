import styled from "styled-components";

interface AsideProps {
  open: boolean;
}

export const Aside = styled.aside<AsideProps>`
  position: absolute;
  top: 0;
  right: ${({ open }) => (open ? 0 : "-100%")};
  bottom: 0;
  transition: right 0.5s ${({ open }) => (open ? "ease-out" : "ease-in")};
  background-color: ${({
    theme: {
      sidebar: { backgroundColor },
    },
  }) => backgroundColor};
  padding: 30px;
  padding-bottom: 10px;
  min-height: 100vh;
  max-width: 330px;
  width: 100%;
  overflow-y: auto;

  @media (min-width: 1024px) {
    position: relative;
    transition-duration: 0s;
    max-width: 380px;
    right: 0;
    left: 0;
  }
`;

export const ProfileContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const ProfileImageContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
  width: 130px;
  height: 130px;

  @media (min-width: 1024px) {
    width: 180px;
    height: 180px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${({
    theme: {
      sidebar: { titleColor },
    },
  }) => titleColor};
  border: 3px solid
    ${({
      theme: {
        sidebar: { titleColor },
      },
    }) => titleColor};
`;

export const Name = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 600;
  font-family: "Poppins", Helvetica, sans-serif;
  color: ${({
    theme: {
      sidebar: { titleColor },
    },
  }) => titleColor};

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

export const Profession = styled.h4`
  font-size: 17px;
  font-weight: 300;
  color: ${({
    theme: {
      sidebar: { professionColor },
    },
  }) => professionColor};

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const SocialItem = styled.li`
  line-height: 30px;
  font-size: 18px;
  margin: 0 7px;
  color: ${({
    theme: {
      sidebar: { titleColor },
    },
  }) => titleColor};
`;

export const NavbarSection = styled.div`
  margin-bottom: 30px;
`;

export const DarkModeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
