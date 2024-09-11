import React from "react";
import ThemeLight from "./ThemeLight";
import ThemeDark from "./ThemeDark";

const ThemeProvider = ({ colorMode, children }) => {
  if (colorMode === "light") {
    return <ThemeLight>{children}</ThemeLight>;
  }
  // Kiểm tra nếu là dark mode
  if (colorMode === "dark") {
    return <ThemeDark>{children}</ThemeDark>;
  }
  // Trường hợp không xác định, có thể trả về mặc định light mode
  return <ThemeLight>{children}</ThemeLight>;
};

export default ThemeProvider;
