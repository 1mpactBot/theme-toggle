import React from "react";
import ThemeContext,{useTheme} from "./ThemeContext";

function Note() {
const theme=useTheme();
  return (
    <div className="note" style={{backgroundColor:theme.cardBG , color: theme.color }} >
      <h1>Heading</h1>
      <p>Content</p>
    </div>
  );
}

export default Note;
