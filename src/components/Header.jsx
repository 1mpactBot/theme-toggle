import React from "react";
// import HighlightIcon from "@material-ui/icons/Highlight";
import ThemeContext,{useTheme} from "./ThemeContext";

function Header(props) {

  const theme= useTheme();
  return (
    <header style={theme}>
      <h1>
        Big-Heading
      </h1>
      <button className="switch" onClick={props.onClick}>Toogle - theme</button>
    </header>
  );
}

export default Header;
