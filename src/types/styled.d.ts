import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    layout: {
      backgroundColor: string;
    };

    text: {
      titleColor: string;
      paragraphColor: string;
    };

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
