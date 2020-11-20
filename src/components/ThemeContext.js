import React,{useContext} from "react";

export const themes={
  lightGlobal:{
    color:"#000",
    backgroundColor:"#f1f3f8",
  },
  darkGlobal:{
    color:"#f1f3f8",
    backgroundColor:"#30475e",
  }
};
export const useTheme = () => useContext(ThemeContext);

const ThemeContext = React.createContext(themes.darkGlobal);

export default ThemeContext;
