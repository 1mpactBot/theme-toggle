import React,{useContext,useState} from "react";
import Header from "./Header";
import Note from "./Note";
import ThemeContext,{useTheme,themes} from "./ThemeContext";

function App() {
  const theme = useTheme();
  const [theTheme,setTheme]= useState(themes.lightGlobal);

  function handleClick(){

    setTheme((prevValue)=>{
      if(prevValue === themes.lightGlobal){
        return themes.darkGlobal;
      }else{
        return themes.lightGlobal;
      }
    });

  }

  return (
        <ThemeContext.Provider value={theTheme}>
    <div style={theme}>
      <Header
      onClick={handleClick}
       />
      <Note />
      <Note />
    </div>
        </ThemeContext.Provider>
  );
}

export default App;
