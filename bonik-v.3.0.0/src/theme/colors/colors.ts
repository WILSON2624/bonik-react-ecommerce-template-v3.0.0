const gray = {
  900: "#2B3445", // Main Text
  800: "#373F50", // Paragraph
  700: "#4B566B",
  600: "#7D879C", // Low Priority form Title/Text
  500: "#AEB4BE",
  400: "#DAE1E7", // Border
  300: "#E3E9EF",
  200: "#F3F5F9", // Line Stroke
  100: "#F6F9FC",
  white: "#FFFFFF"
};

const textColor = {
  hint: gray[600],
  muted: gray[600],
  primary: gray[900],
  disabled: gray[400],
  secondary: gray[800]
};

const bodyColor = {
  default: gray[100],
  paper: gray["white"],
  text: textColor.primary
};

const primaryColor = {
  light: "#FFE1E6",
  main: "#E94560",
  dark: "#4F4CB6",
  text: "#ffffff",
  100: "#FCE9EC",
  200: "#F8C7CF",
  300: "#F07D90",
  400: "#EC6178",
  500: "#D23F57",
  600: "#E63E58",
  700: "#E3364E",
  800: "#DF2E44",
  900: "#D91F33"
};

const secondaryColor = {
  light: "rgba(15, 52, 96, 0.2)",
  main: "rgba(15, 52, 96, 1)",
  dark: "#303A47",
  text: "#ffffff",
  900: "#041533",
  100: "#F3F6F9"
};

const dark = { main: "#222" };

const warningColor = {
  main: "#FFCD4E",
  text: textColor.primary
};

const errorColor = {
  main: "#E94560",
  light: "#FFE1E6",
  text: textColor.primary
};

const successColor = {
  text: textColor.primary,
  main: "rgba(51, 208, 103, 1)",
  light: "rgba(51, 208, 103, 0.15)"
};

const defaultColor = {
  main: textColor.primary,
  dark: textColor.primary,
  text: textColor.primary,
  light: textColor.secondary
};

const paste = {
  50: "#F5F5F5",
  100: "#DDFBF1",
  main: "#4BB4B4"
};

const marron = {
  50: "#f3f5f9",
  100: "#F6F2ED",
  main: "#BE7374"
};

export const blue = {
  100: "#DBF0FE",
  200: "#B8DEFE",
  300: "#94C9FE",
  400: "#7AB6FD",
  500: "#4E97FD",
  600: "#3975D9",
  700: "#2756B6",
  800: "#183C92",
  900: "#0E2979",
  main: "#4E97FD"
};

export const colors = {
  dark,
  gray,
  blue,
  paste,
  marron,
  text: textColor,
  body: bodyColor,
  error: errorColor,
  warn: warningColor,
  success: successColor,
  default: defaultColor,
  primary: primaryColor,
  secondary: secondaryColor
};
