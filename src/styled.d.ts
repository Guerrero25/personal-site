import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      action: string;
      secondary: string;
    };
    sidebar: {
      backgroundColor: string;
      titleColor: string;
      professionColor: string;
    };
  }
}

declare module "*.jpg" {
  const content: string;
  export default content;
}
