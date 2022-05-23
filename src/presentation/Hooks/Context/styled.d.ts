import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // The theme name:
    name: "Dark" | "Light";

    // Primary:
    primary300: string;
    primary500: string;
    primary700: string;
    primary900: string;

    // Text:
    textPrimary: string;
    textSecondary: string;
    textDisabled: string;
    textButtons: string;
    textRedButtons: string;
    textButtonsHover: string;
    textInputHover: string;
    textImage: string;
    textDark: string;

    // Icon:
    iconPrimary: string;
    iconSecondary: string;
    iconDisabled: string;
    iconCalendarLate: string;
    iconCalendarInDay: string;
    iconCalendarInAdvance: string;

    //Size
    size300: string;
    size400: string;
    size500: string;
    size600: string;
    size700: string;
    size800: string;
    size900: string;

    // Border:
    borderInteractive: string;
    borderLine: string;
    borderDivider: string;
    borderCardDivider: string;
    borderImage: string;

    // Background:
    backgroundCard: string;
    backgroundCard2: string;
    backgroundBody: string;
    backgroundNav: string;
    backgroundLight: string;
    backgroundInteractive: string;
    backgroundInteractive2: string;
    backgroundInput: string;
    backgroundInputFormV2: string;
    backgroundHoverCard: string;
    backgroundImage: string;

    // Aditional Colors
    green: string;
    blue: string;
    red: string;
    orange: string;
    darkGreen: string;
    darkRed: string;
    errorRed: string;
    white: string;

    shadow10: string;
    srcAvatar: string;

    static: {
      logo: string;
      logoMinified: string;
      user: string;
      uploading: string;
    };

    color: string;
  }
}
