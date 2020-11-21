import React,{useContext} from "react";

export const themes={
  lightGlobal:{
    color:"#000",
    backgroundColor:"#f1f3f8",
    cardBG: "#f1f3f8",
    headerBG: "#9d65c9"
  },
  darkGlobal:{
    color:"#f1f3f8",
    backgroundColor:"#1a1a2e",
    cardBG: "#0f3460",
    headerBG: "#1a1a2e"
  }
};
export const useTheme = () => useContext(ThemeContext);

const ThemeContext = React.createContext(themes.darkGlobal);

export default ThemeContext;
